/**
 * Converts camelCase to kebab-case
 */
export const toKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

/**
 * Converts a token key path to a CSS variable name
 * e.g. "colors.brand.orange.500" -> "--brand-orange-500"
 */
export const tokenKeyToCssVar = (path: string) => {
  // Remove "colors." prefix if present
  const base = path.startsWith("colors.") ? path.slice(7) : path;
  return `--${toKebabCase(base).replace(/\./g, "-")}`;
};

/**
 * Converts a sidebar key to a CSS variable name for shadcn/ui
 * e.g. "primary" -> "--sidebar-primary"
 */
export const sidebarKeyToCssVar = (key: string) => {
  return `--sidebar-${toKebabCase(key)}`;
};
