
export function createPill({
  label,
  tag = "span",
  href = "",
  className = "",
} = {}) {
  const pill = document.createElement(tag);
  const isInteractive = Boolean(href) || tag === "button";
  const interactionClasses = isInteractive
    ? "pointer-events-auto cursor-pointer hover:bg-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-300"
    : "";

  pill.textContent = label;
  pill.className = `relative z-30 inline-flex items-center justify-center rounded-full bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-200 ${interactionClasses} ${className}`;

  if (href) pill.setAttribute("href", href);

  return pill;
}
