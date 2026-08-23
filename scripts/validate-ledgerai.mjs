import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../ledgerai-mobile/index.html", import.meta.url), "utf8");
const notes = readFileSync(new URL("../ledgerai-mobile/RESPONSIVE-NOTES.md", import.meta.url), "utf8");

const required = [
  "<!doctype html>",
  'lang="en"',
  'name="viewport"',
  'class="skip-link"',
  'role="dialog"',
  'aria-modal="true"',
  'aria-hidden="true"',
  'aria-live="polite"',
  "prefers-reduced-motion",
  "No transactions found",
  "lastFocused",
  "aria-current",
];

const missing = required.filter((token) => !html.includes(token));
if (missing.length) {
  throw new Error(`LedgerAI validation failed. Missing: ${missing.join(", ")}`);
}

for (const breakpoint of ["1100", "760", "430"]) {
  if (!html.includes(`max-width:${breakpoint}px`)) {
    throw new Error(`CSS breakpoint ${breakpoint}px is missing.`);
  }
  if (!notes.includes(breakpoint)) {
    throw new Error(`Responsive notes do not document ${breakpoint}px.`);
  }
}

const inlineScript = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
if (!inlineScript) throw new Error("Inline application script was not found.");
new Function(inlineScript);

if (/<script[^>]+src=|<link[^>]+stylesheet/i.test(html)) {
  throw new Error("The standalone demo must not depend on external scripts or stylesheets.");
}

console.log("LedgerAI static validation passed.");
