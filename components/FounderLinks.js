import Icon from "@/components/Icon";

const KINDS = {
  linkedin: ["b-linkedin", "LinkedIn"],
  x: ["b-x", "X"],
  github: ["b-github", "GitHub"],
};

/* Renders only the profiles that exist in lib/config.js — never a dead link. */
export default function FounderLinks({ links = {}, name }) {
  const items = Object.entries(links).filter(([, url]) => url);
  if (!items.length) return null;
  return (
    <div className="member__links">
      {items.map(([kind, url]) =>
        kind === "portfolio" ? (
          <a className="soc soc--pill" href={url} target="_blank" rel="noopener" key={kind}>Portfolio <svg aria-hidden="true"><use href="/assets/icons.svg#i-arrow-up-right" /></svg></a>
        ) : (
          <a className="soc" href={url} aria-label={`${name} on ${KINDS[kind][1]}`} target="_blank" rel="noopener" key={kind}><svg aria-hidden="true"><use href={`/assets/icons.svg#${KINDS[kind][0]}`} /></svg></a>
        )
      )}
    </div>
  );
}
