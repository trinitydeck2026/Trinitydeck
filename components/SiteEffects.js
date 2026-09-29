"use client";

import { useEffect } from "react";
import { initSite } from "@/lib/site";
import config from "@/lib/config";

/* Wires every page interaction after the page mounts; cleans up on leave. */
export default function SiteEffects() {
  useEffect(() => initSite(config), []);
  return null;
}
