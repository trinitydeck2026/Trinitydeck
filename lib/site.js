/*
 * Trinity Deck — page interactions.
 * Ported one-to-one from the static build. initSite() wires everything on the
 * current page and returns a dispose function, so client-side navigation in
 * Next.js never leaves a listener, timer or observer behind.
 */
export function initSite(cfg) {
  var alive = true;
  var listeners = [], timers = [], observers = [];
  function on(t, type, fn, opts) { if (!t) return; t.addEventListener(type, fn, opts); listeners.push([t, type, fn, opts]); }
  function every(fn, ms) { var id = window.setInterval(fn, ms); timers.push(["i", id]); return id; }
  function later(fn, ms) { var id = window.setTimeout(fn, ms); timers.push(["t", id]); return id; }
  function raf(fn) { return alive ? window.requestAnimationFrame(function (t) { if (alive) fn(t); }) : 0; }
  function IO(cb, o) { var x = new window.IntersectionObserver(cb, o); observers.push(x); return x; }
  function MO(cb) { var x = new window.MutationObserver(cb); observers.push(x); return x; }
  function onLoad(fn) { if (document.readyState === "complete") later(fn, 0); else on(window, "load", fn); }


  var doc = document;
  var root = doc.documentElement;
  var CFG = cfg || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };

  /* ---------------------------------------------------------------
     Load-in (hero)
     --------------------------------------------------------------- */
  root.classList.remove("loaded");
  function markLoaded() { raf(function () { raf(function () { root.classList.add("loaded"); }); }); }
  if (doc.fonts && doc.fonts.ready) {
    var done = false;
    doc.fonts.ready.then(function () { if (!done) { done = true; markLoaded(); } });
    later(function () { if (!done) { done = true; markLoaded(); } }, 700);
  } else { markLoaded(); }

  /* ---------------------------------------------------------------
     Navigation
     --------------------------------------------------------------- */
  var toggle = $(".nav__toggle");
  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      var use = toggle.querySelector("use");
      if (use) use.setAttribute("href", "/assets/icons.svg#i-" + (open ? "x" : "menu"));
    }
    var m = $("#mnav"); if (m) m.setAttribute("aria-hidden", String(!open));
  }
  if (toggle) on(toggle, "click", function () { setMenu(!root.classList.contains("menu-open")); });
  $$(".mnav a").forEach(function (a) { on(a, "click", function () { setMenu(false); }); });
  on(doc, "keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // Scrollspy for nav underline
  var navLinks = $$(".nav__link[href^='#']");
  var spyTargets = navLinks.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);

  /* ---------------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------------- */
  // Checked every scroll frame, so jumps (anchor links, fast flicks) never
  // leave content hidden. Anything already above the fold line reveals.
  var pendingAnim = $$("[data-anim]");
  function revealPass() {
    if (!pendingAnim.length) return;
    var line = window.innerHeight * 0.92;
    pendingAnim = pendingAnim.filter(function (el) {
      if (el.getBoundingClientRect().top < line) { el.classList.add("in"); return false; }
      return true;
    });
  }
  if (reduceMotion) { pendingAnim.forEach(function (el) { el.classList.add("in"); }); pendingAnim = []; }

  /* ---------------------------------------------------------------
     Word-by-word scrub (About copy)
     --------------------------------------------------------------- */
  var scrub = $("[data-scrub]");
  var scrubWords = [];
  if (scrub && !reduceMotion) {
    $$("p", scrub).forEach(function (p) {
      var words = p.textContent.split(/(\s+)/);
      p.textContent = "";
      words.forEach(function (w) {
        if (/^\s+$/.test(w)) { p.appendChild(doc.createTextNode(w)); return; }
        var s = doc.createElement("span"); s.className = "scrub-word"; s.textContent = w;
        p.appendChild(s); scrubWords.push(s);
      });
    });
  }

  /* ---------------------------------------------------------------
     Counters + the 3 → 1 flip
     --------------------------------------------------------------- */
  function countUp(el) {
    var to = parseFloat(el.getAttribute("data-count")); var dur = 1400; var t0 = null;
    function step(t) {
      if (!t0) t0 = t; var p = clamp((t - t0) / dur, 0, 1); var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e); if (p < 1) raf(step);
    }
    if (reduceMotion) { el.textContent = to; return; }
    el.textContent = "0"; raf(step);
  }
  function flip(el) {
    var vals = el.getAttribute("data-flip").split(",");
    var i = 0;
    function next() {
      i = (i + 1) % vals.length;
      el.animate([{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(-30%)", opacity: 0 }], { duration: 300, easing: "ease-in" }).onfinish = function () {
        el.textContent = vals[i];
        el.animate([{ transform: "translateY(30%)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }], { duration: 450, easing: "cubic-bezier(.22,1,.36,1)" });
      };
    }
    if (reduceMotion) { el.textContent = vals[vals.length - 1]; return; }
    later(next, 900);
    every(next, 3600);
  }
  if ("IntersectionObserver" in window) {
    var cio = IO(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        if (el.hasAttribute("data-count")) countUp(el); else flip(el);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    $$("[data-count],[data-flip]").forEach(function (el) { cio.observe(el); });
  }

  /* ---------------------------------------------------------------
     Accordions (services + FAQ). Content is always in the DOM.
     --------------------------------------------------------------- */
  var pillars = $$(".pillar");
  function syncPillars(item) {
    if (!item || !item.hasAttribute("data-pillar")) return;
    var key = item.getAttribute("data-pillar");
    pillars.forEach(function (p) { p.classList.toggle("is-active", p.getAttribute("data-pillar") === key); });
  }
  function setOpen(item, open) {
    item.classList.toggle("is-open", open);
    var b = item.querySelector("button[aria-expanded]"); if (b) b.setAttribute("aria-expanded", String(open));
  }
  function openItem(item) {
    var group = item.closest("[data-acc]");
    if (group && group.getAttribute("data-acc") === "single") {
      $$(":scope > .acc-item, :scope > .faq-item", group).forEach(function (o) { if (o !== item) setOpen(o, false); });
    }
    setOpen(item, true); syncPillars(item);
  }
  $$("[data-acc]").forEach(function (group) {
    $$(":scope > .acc-item, :scope > .faq-item", group).forEach(function (item) {
      var btn = item.querySelector("button[aria-expanded]");
      on(btn, "click", function () {
        if (item.classList.contains("is-open")) {
          if (item.classList.contains("acc-item")) return; // one service always open, as in the reference
          setOpen(item, false);
        } else { openItem(item); }
      });
    });
  });
  pillars.forEach(function (p) {
    on(p, "click", function () {
      var first = $(".acc-item[data-pillar='" + p.getAttribute("data-pillar") + "']");
      if (first) {
        openItem(first);
        if (window.__lenis) window.__lenis.scrollTo(first, { offset: -(window.innerHeight / 2 - first.offsetHeight / 2) });
        else first.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }
    });
  });
  function openFromHash(hash) {
    if (!hash || hash.indexOf("#svc-") !== 0) return;
    var item = $(hash); if (item && item.classList.contains("acc-item")) openItem(item);
  }
  openFromHash(location.hash);
  on(window, "hashchange", function () { openFromHash(location.hash); });
  $$("a[href^='#svc-']").forEach(function (a) {
    on(a, "click", function () { openFromHash(a.getAttribute("href")); });
  });

  /* ---------------------------------------------------------------
     Case cards: auto slides, dots, cursor chip, stacked scaling
     --------------------------------------------------------------- */
  var cases = $$("[data-case]");
  cases.forEach(function (card) {
    var slides = $$(".case__slide", card);
    var dots = $$(".case__dots button", card);
    var i = 0, timer = null, visible = false;
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("is-on", k === i); });
      dots.forEach(function (d, k) { d.classList.toggle("is-on", k === i); d.setAttribute("aria-selected", String(k === i)); });
    }
    function play() { stop(); if (!reduceMotion) timer = every(function () { go(i + 1); }, 3200); }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    dots.forEach(function (d, k) { on(d, "click", function () { go(k); play(); }); });
    if ("IntersectionObserver" in window) {
      IO(function (en) { visible = en[0].isIntersecting; visible ? play() : stop(); }, { threshold: 0.3 }).observe(card);
    }
    var media = $(".case__media", card), chip = $(".cursor-chip", card);
    if (media && chip) {
      var tx = 0, ty = 0, cx = 0, cy = 0, chipRaf = null;
      function loop() {
        cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
        chip.style.left = cx + "px"; chip.style.top = cy + "px";
        chipRaf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.3 ? raf(loop) : null;
      }
      on(media, "pointermove", function (e) {
        var r = media.getBoundingClientRect(); tx = e.clientX - r.left; ty = e.clientY - r.top;
        if (!chipRaf) chipRaf = raf(loop);
      });
      on(media, "pointerenter", function (e) {
        var r = media.getBoundingClientRect(); cx = tx = e.clientX - r.left; cy = ty = e.clientY - r.top; loop(); stop();
      });
      on(media, "pointerleave", function () { if (visible) play(); });
    }
  });

  /* ---------------------------------------------------------------
     Process slider
     --------------------------------------------------------------- */
  var track = $("[data-slider]");
  if (track) {
    var steps = $$(".step", track), idx = 0;
    var prev = $("[data-prev]"), next = $("[data-next]");
    function maxIdx() {
      var vp = track.parentElement.getBoundingClientRect().width;
      var w = steps[0].getBoundingClientRect().width + 20;
      var visibleN = Math.max(1, Math.floor((vp + 20 - 24) / w));
      return Math.max(0, steps.length - visibleN);
    }
    function render() {
      var m = maxIdx(); idx = clamp(idx, 0, m);
      var w = steps[0].getBoundingClientRect().width + 20;
      track.style.transform = "translateX(" + (-idx * w) + "px)";
      if (prev) prev.disabled = idx === 0;
      if (next) next.disabled = idx >= m;
    }
    if (prev) on(prev, "click", function () { idx--; render(); });
    if (next) on(next, "click", function () { idx++; render(); });
    var sx = null;
    on(track, "pointerdown", function (e) { sx = e.clientX; });
    on(track, "pointerup", function (e) {
      if (sx === null) return; var dx = e.clientX - sx; sx = null;
      if (Math.abs(dx) > 40) { idx += dx < 0 ? 1 : -1; render(); }
    });
    on(window, "resize", render);
    render();
  }

  /* ---------------------------------------------------------------
     Results slider
     --------------------------------------------------------------- */
  var stats = $("[data-stats]");
  if (stats) {
    var st = $(".stat-track", stats), sn = $$(".stat", stats).length, si = 0;
    var sp = $("[data-stat-prev]", stats), snx = $("[data-stat-next]", stats), lab = $("[data-stat-i]", stats);
    function srender() {
      st.style.transform = "translateX(" + (-si * 100) + "%)";
      sp.disabled = si === 0; snx.disabled = si === sn - 1;
      lab.textContent = String(si + 1).padStart(2, "0");
      var c = $$(".stat", stats)[si].querySelector("[data-count]"); if (c && c.dataset.done) countUp(c);
      if (c) c.dataset.done = "1";
    }
    on(sp, "click", function () { si = clamp(si - 1, 0, sn - 1); srender(); });
    on(snx, "click", function () { si = clamp(si + 1, 0, sn - 1); srender(); });
  }

  /* ---------------------------------------------------------------
     Hub connector lines with travelling dots
     --------------------------------------------------------------- */
  var hub = $("[data-hub]");
  function drawHub() {
    if (!hub) return;
    var svg = $(".hub__lines", hub); var node = $("[data-hub-node]", hub);
    if (!svg || !node || getComputedStyle(svg).display === "none") return;
    var hr = hub.getBoundingClientRect(), nr = node.getBoundingClientRect();
    var ncx = nr.left - hr.left + nr.width / 2, ncy = nr.top - hr.top + nr.height / 2;
    var ns = "http://www.w3.org/2000/svg"; svg.innerHTML = "";
    svg.setAttribute("viewBox", "0 0 " + hr.width + " " + hr.height);
    $$("[data-hub-card]", hub).forEach(function (c, k) {
      var r = c.getBoundingClientRect();
      var left = r.left - hr.left < ncx;
      var x1 = left ? r.right - hr.left : r.left - hr.left;
      var y1 = r.top - hr.top + r.height / 2;
      var x2 = left ? ncx - nr.width / 2 : ncx + nr.width / 2;
      var y2 = ncy + (y1 - ncy) * 0.18;
      var midX = x1 + (x2 - x1) * 0.5, rad = 22, dir = y2 > y1 ? 1 : -1, sx = left ? 1 : -1;
      var d;
      if (Math.abs(y2 - y1) < rad * 2) d = "M" + x1 + "," + y1 + " L" + x2 + "," + y2;
      else d = "M" + x1 + "," + y1 + " H" + (midX - sx * rad) + " Q" + midX + "," + y1 + " " + midX + "," + (y1 + dir * rad) +
        " V" + (y2 - dir * rad) + " Q" + midX + "," + y2 + " " + (midX + sx * rad) + "," + y2 + " H" + x2;
      var p = doc.createElementNS(ns, "path"); p.setAttribute("d", d); p.id = "hubp" + k; svg.appendChild(p);
      var end = doc.createElementNS(ns, "circle"); end.setAttribute("r", "3.5"); end.setAttribute("cx", x1); end.setAttribute("cy", y1); svg.appendChild(end);
      if (!reduceMotion) {
        var dot = doc.createElementNS(ns, "circle"); dot.setAttribute("r", "4");
        var am = doc.createElementNS(ns, "animateMotion");
        am.setAttribute("dur", (2.6 + k * 0.35) + "s"); am.setAttribute("repeatCount", "indefinite");
        am.setAttribute("begin", (k * 0.4) + "s"); am.setAttribute("path", d);
        dot.appendChild(am); svg.appendChild(dot);
      }
    });
  }
  onLoad(drawHub);
  var rT; on(window, "resize", function () { clearTimeout(rT); rT = later(drawHub, 150); });
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(drawHub);

  /* ---------------------------------------------------------------
     Floating tool tiles: mouse + scroll parallax
     --------------------------------------------------------------- */
  var tools = $("[data-tools]"), tiles = tools ? $$(".float-tile", tools) : [];
  var mouse = { x: 0, y: 0 };
  if (tools && !reduceMotion) {
    on(tools, "pointermove", function (e) {
      var r = tools.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width - 0.5; mouse.y = (e.clientY - r.top) / r.height - 0.5;
      updateTiles();
    });
  }
  function updateTiles() {
    if (!tools) return;
    var r = tools.getBoundingClientRect(); var prog = (window.innerHeight - r.top) / (window.innerHeight + r.height);
    tiles.forEach(function (t) {
      var d = parseFloat(t.getAttribute("data-depth")) || 20;
      t.style.setProperty("--px", (mouse.x * d * -1.2) + "px");
      t.style.setProperty("--py", (mouse.y * d * -1.2 + (0.5 - prog) * d * 3) + "px");
    });
  }

  /* ---------------------------------------------------------------
     Team spotlight
     --------------------------------------------------------------- */
  $$(".member").forEach(function (m) {
    on(m, "pointermove", function (e) {
      var r = m.getBoundingClientRect();
      m.style.setProperty("--mx", (e.clientX - r.left) + "px"); m.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* ---------------------------------------------------------------
     Scroll loop: nav state, scrollspy, scrub, stacked cases, footer
     --------------------------------------------------------------- */
  var footer = $("[data-footer]"), fword = footer ? $(".footer__word", footer) : null;
  var ticking = false;
  function onScroll() {
    var y = window.scrollY, vh = window.innerHeight;
    root.classList.toggle("scrolled", y > 40);

    // scrollspy
    var current = null;
    spyTargets.forEach(function (t) { if (t.getBoundingClientRect().top < vh * 0.4) current = t; });
    navLinks.forEach(function (a) { a.classList.toggle("is-active", current && a.getAttribute("href") === "#" + current.id); });

    // scrub
    if (scrubWords.length) {
      var r = scrub.getBoundingClientRect();
      var p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35), 0, 1);
      var n = Math.round(p * scrubWords.length);
      for (var k = 0; k < scrubWords.length; k++) scrubWords[k].classList.toggle("on", k < n);
    }

    // stacked case cards shrink as the next one arrives
    if (!reduceMotion && window.innerWidth > 809) {
      cases.forEach(function (c, k) {
        var nxt = cases[k + 1]; if (!nxt) { c.style.transform = ""; c.style.filter = ""; return; }
        var cr = c.getBoundingClientRect(), nr = nxt.getBoundingClientRect();
        var prog = clamp(1 - (nr.top - cr.top) / cr.height, 0, 1);
        c.style.transform = "scale(" + (1 - prog * 0.06) + ")";
        c.style.filter = "brightness(" + (1 - prog * 0.12) + ")";
      });
    }

    // footer wordmark rises
    if (fword) {
      var fr = footer.getBoundingClientRect();
      var fp = clamp((vh - fr.top) / (fr.height), 0, 1);
      fword.style.setProperty("--fy", (240 * (1 - fp)) + "px");
    }

    updateTiles();
    revealPass();
    ticking = false;
  }
  on(window, "scroll", function () { if (!ticking) { ticking = true; raf(onScroll); } }, { passive: true });
  on(window, "resize", onScroll);
  onScroll();

  /* ---------------------------------------------------------------
     Clocks
     --------------------------------------------------------------- */
  var clocks = $$(".clock[data-tz]");
  function tick() {
    var now = new Date();
    clocks.forEach(function (c) {
      var tz = c.getAttribute("data-tz");
      try {
        var t = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(now);
        c.querySelector("strong").textContent = t;
        if (tz === "Asia/Kolkata") {
          var parts = new Intl.DateTimeFormat("en-GB", { weekday: "short", hour: "numeric", hour12: false, timeZone: tz }).formatToParts(now);
          var wd = "", hr = 0;
          parts.forEach(function (p) { if (p.type === "weekday") wd = p.value; if (p.type === "hour") hr = parseInt(p.value, 10); });
          c.classList.toggle("is-open", wd !== "Sat" && wd !== "Sun" && hr >= 9 && hr < 18);
        }
      } catch (e) { /* unsupported timezone */ }
    });
  }
  if (clocks.length) { tick(); every(tick, 20000); }

  /* ---------------------------------------------------------------
     Dotted globe with arcs from Bengaluru
     --------------------------------------------------------------- */
  var cv = $("#globe");
  if (cv && cv.getContext) {
    var ctx = cv.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2), W = 0, R = 0, rot = 0, gRun = false;
    var pts = [], N = 1400;
    for (var i = 0; i < N; i++) {
      var yv = 1 - (i / (N - 1)) * 2, rr = Math.sqrt(1 - yv * yv), th = i * 2.399963;
      pts.push([Math.cos(th) * rr, yv, Math.sin(th) * rr]);
    }
    var ll = function (lat, lon) { var a = lat * Math.PI / 180, b = lon * Math.PI / 180; return [Math.cos(a) * Math.cos(b), Math.sin(a), Math.cos(a) * Math.sin(b)]; };
    var home = ll(12.97, 77.59);
    var places = [ll(51.5, -0.12), ll(40.71, -74), ll(50.85, 4.35), ll(52.37, 4.9), ll(-33.87, 151.2), ll(37.77, -122.42)];
    function size() { var r = cv.getBoundingClientRect(); W = r.width; cv.width = W * dpr; cv.height = W * dpr; R = W * 0.46; }
    function proj(p) {
      var c = Math.cos(rot), s = Math.sin(rot), tilt = -0.35, ct = Math.cos(tilt), stt = Math.sin(tilt);
      var x = p[0] * c - p[2] * s, z = p[0] * s + p[2] * c, y = p[1];
      var y2 = y * ct - z * stt, z2 = y * stt + z * ct;
      return [W / 2 + x * R, W / 2 - y2 * R, z2];
    }
    function slerp(a, b, t) {
      var d = Math.acos(clamp(a[0] * b[0] + a[1] * b[1] + a[2] * b[2], -1, 1)), s = Math.sin(d);
      if (s < 1e-6) return a; var k1 = Math.sin((1 - t) * d) / s, k2 = Math.sin(t * d) / s, h = 1 + Math.sin(Math.PI * t) * 0.18;
      return [(a[0] * k1 + b[0] * k2) * h, (a[1] * k1 + b[1] * k2) * h, (a[2] * k1 + b[2] * k2) * h];
    }
    function frame(ts) {
      if (!gRun) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, W);
      rot = -1.9 + (reduceMotion ? 0 : ts * 0.00006);
      for (var i = 0; i < pts.length; i++) {
        var q = proj(pts[i]); if (q[2] < -0.1) continue;
        ctx.fillStyle = "rgba(160,190,255," + (0.12 + q[2] * 0.45) + ")";
        ctx.beginPath(); ctx.arc(q[0], q[1], 1.1 + q[2] * 0.6, 0, 6.283); ctx.fill();
      }
      var tt = (ts % 4000) / 4000;
      places.forEach(function (pl, k) {
        ctx.beginPath(); var vis = false;
        for (var j = 0; j <= 40; j++) {
          var q = proj(slerp(home, pl, j / 40)); if (q[2] > -0.05) vis = true;
          j ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]);
        }
        if (!vis) return;
        ctx.strokeStyle = "rgba(77,151,255,.55)"; ctx.lineWidth = 1.2; ctx.stroke();
        var m = proj(slerp(home, pl, (tt + k * 0.17) % 1));
        if (m[2] > 0) { ctx.fillStyle = "#9cc3ff"; ctx.beginPath(); ctx.arc(m[0], m[1], 2.4, 0, 6.283); ctx.fill(); }
        var e = proj(pl); if (e[2] > 0) { ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.arc(e[0], e[1], 2.6, 0, 6.283); ctx.fill(); }
      });
      var h = proj(home);
      if (h[2] > 0) {
        var pr = 4 + ((ts % 1800) / 1800) * 14;
        ctx.strokeStyle = "rgba(77,151,255," + (1 - pr / 18) + ")"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(h[0], h[1], pr, 0, 6.283); ctx.stroke();
        ctx.fillStyle = "#4d97ff"; ctx.beginPath(); ctx.arc(h[0], h[1], 4.5, 0, 6.283); ctx.fill();
      }
      raf(frame);
    }
    size(); on(window, "resize", size);
    if ("IntersectionObserver" in window) {
      IO(function (en) {
        var was = gRun; gRun = en[0].isIntersecting; if (gRun && !was) raf(frame);
      }).observe(cv);
    } else { gRun = true; raf(frame); }
  }

  /* ---------------------------------------------------------------
     Cal.com inline embed — loaded after first paint, near the section
     --------------------------------------------------------------- */
  var calShell = $("[data-cal]");
  function loadCal() {
    if (!calShell || calShell.dataset.loaded) return; calShell.dataset.loaded = "1";
    var booted = window.Cal && window.Cal.ns && window.Cal.ns["30min"];
    if (!booted) {
    (function (C, A, L) { var p = function (a, ar) { a.q.push(ar); }; var d = C.document; C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    window.Cal("init", "30min", { origin: "https://app.cal.com" });
    window.Cal.config = window.Cal.config || {}; window.Cal.config.forwardQueryParams = true;
    }
    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: CFG.calLink || "trinitydeckoffical/30min"
    });
    window.Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    window.Cal.ns["30min"]("on", { action: "linkReady", callback: function () { calShell.classList.add("cal-loaded"); } });
    // Hide the skeleton once the iframe appears, even if the event never fires
    var mo = MO(function () {
      if ($("iframe", calShell)) { later(function () { calShell.classList.add("cal-loaded"); }, 900); mo.disconnect(); }
    });
    mo.observe(calShell, { childList: true, subtree: true });
  }
  if (calShell) {
    if ("IntersectionObserver" in window) {
      var calIo = IO(function (en) { if (en[0].isIntersecting) { loadCal(); calIo.disconnect(); } }, { rootMargin: "900px 0px" });
      onLoad(function () { calIo.observe(calShell); });
    } else { onLoad(loadCal); }
  }

  /* ---------------------------------------------------------------
     Contact form
     --------------------------------------------------------------- */
  var form = $("[data-form]");
  if (form) {
    var wrap = form.closest("[data-form-wrap]");
    function setErr(field, msg) {
      var f = field.closest(".field"); f.classList.toggle("has-error", !!msg);
      var e = $(".field__err", f); if (e) e.textContent = msg || "";
    }
    function validate() {
      var ok = true;
      [["name", "Please tell us your name."], ["email", "We need an email to reply to."], ["store_url", "Your store URL lets us do the teardown before we reply."], ["need", "Pick the closest option."]].forEach(function (r) {
        var el = form.elements[r[0]]; var v = (el.value || "").trim(); var msg = "";
        if (!v) msg = r[1];
        else if (r[0] === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = "That email doesn't look right.";
        else if (r[0] === "store_url" && !/\.[a-z]{2,}/i.test(v)) msg = "Enter a domain, like yourstore.com.";
        setErr(el, msg); if (msg && ok) { el.focus(); ok = false; }
      });
      return ok;
    }
    on(form, "input", function (e) { if (e.target.closest(".has-error")) setErr(e.target, ""); });
    on(form, "submit", function (e) {
      e.preventDefault();
      if (form.elements._gotcha && form.elements._gotcha.value) return;
      if (!validate()) return;
      var data = {}; new FormData(form).forEach(function (v, k) { if (k !== "_gotcha") data[k] = v; });
      var btn = form.querySelector("button[type=submit]"); btn.disabled = true;
      function success() { wrap.classList.add("is-sent"); }
      if (CFG.formEndpoint) {
        fetch(CFG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw new Error(r.status); success(); })
          .catch(function () { btn.disabled = false; alert("That didn't send. Please email " + (CFG.contactEmail || "contact@trinitydeck.com") + " instead."); });
      } else {
        var body = "Name: " + data.name + "\nEmail: " + data.email + "\nStore: " + data.store_url + "\nNeed: " + data.need + "\n\n" + (data.message || "");
        window.location.href = "mailto:" + (CFG.contactEmail || "contact@trinitydeck.com") + "?subject=" + encodeURIComponent("Teardown request — " + data.store_url) + "&body=" + encodeURIComponent(body);
        success();
      }
    });
  }

  return function dispose() {
    alive = false;
    listeners.forEach(function (l) { l[0].removeEventListener(l[1], l[2], l[3]); });
    timers.forEach(function (t) { (t[0] === "i" ? window.clearInterval : window.clearTimeout)(t[1]); });
    observers.forEach(function (o) { o.disconnect(); });
    root.classList.remove("menu-open");
  };
}
