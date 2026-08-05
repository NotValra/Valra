
export function createContainer({
  tag = "section",
  id = "",
  className = "",
  children = [],
} = {}) {
  const container = document.createElement(tag);

  if (id) container.id = id;
  if (className) container.className = className;

  children.forEach((child) => container.append(child));

  return container;
}
