import fs from "fs";
import path from "path";
import { tokens } from "./tokens";
import { tokenKeyToCssVar, sidebarKeyToCssVar } from "./utils";

const GLOBALS_CSS_PATH = path.join(process.cwd(), "app", "globals.css");
const START_MARKER = "/* DESIGN_SYSTEM_START */";
const END_MARKER = "/* DESIGN_SYSTEM_END */";

function generateCss() {
  const rootVars: string[] = [];

  // 1. Process regular tokens (colors, spacing, radius, typography)
  // Recursively walk through tokens to generate CSS vars
  const walk = (obj: any, path: string = "") => {
    for (const key in obj) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof obj[key] === "object") {
        walk(obj[key], currentPath);
      } else {
        rootVars.push(`  ${tokenKeyToCssVar(currentPath)}: ${obj[key]};`);
      }
    }
  };

  // Walk through relevant top-level tokens
  walk(tokens.colors, "colors");
  walk(tokens.spacing, "spacing");
  walk(tokens.radius, "radius");
  walk(tokens.typography.size, "typography.size");
  walk(tokens.typography.weight, "typography.weight");
  rootVars.push(`  --font-primary: ${tokens.typography.fontFamily.primary};`);

  // 2. Process sidebar tokens separately (mapped to shadcn/ui vars)
  rootVars.push("");
  rootVars.push("  /* Sidebar */");
  for (const [key, value] of Object.entries(tokens.sidebar)) {
    rootVars.push(`  ${sidebarKeyToCssVar(key)}: ${value};`);
  }

  // 3. Map semantic tokens to shadcn/ui base vars
  rootVars.push("");
  rootVars.push("  /* Shadcn UI Overrides */");
  rootVars.push(`  --background: ${tokens.colors.neutral.gray[50]};`);
  rootVars.push(`  --foreground: ${tokens.colors.neutral.black};`);
  rootVars.push(`  --card: ${tokens.colors.neutral.white};`);
  rootVars.push(`  --card-foreground: ${tokens.colors.neutral.black};`);
  rootVars.push(`  --popover: ${tokens.colors.neutral.white};`);
  rootVars.push(`  --popover-foreground: ${tokens.colors.neutral.black};`);
  rootVars.push(`  --primary: ${tokens.colors.brand.purple[500]};`);
  rootVars.push(`  --primary-foreground: ${tokens.colors.neutral.white};`);
  rootVars.push(`  --secondary: ${tokens.colors.neutral.gray[100]};`);
  rootVars.push(`  --secondary-foreground: ${tokens.colors.brand.purple[500]};`);
  rootVars.push(`  --muted: ${tokens.colors.neutral.gray[100]};`);
  rootVars.push(`  --muted-foreground: ${tokens.colors.neutral.gray[500]};`);
  rootVars.push(`  --accent: ${tokens.colors.neutral.gray[100]};`);
  rootVars.push(`  --accent-foreground: ${tokens.colors.brand.purple[500]};`);
  rootVars.push(`  --destructive: ${tokens.colors.semantic.error};`);
  rootVars.push(`  --destructive-foreground: ${tokens.colors.neutral.white};`);
  rootVars.push(`  --border: ${tokens.colors.neutral.gray[300]};`);
  rootVars.push(`  --input: ${tokens.colors.neutral.gray[300]};`);
  rootVars.push(`  --ring: ${tokens.colors.brand.purple[500]};`);
  rootVars.push(`  --radius: ${tokens.radius.md};`);

  const newContent = `${START_MARKER}
:root {
${rootVars.join("\n")}
}

.dark {
  /* Dark mode overrides can be added here if needed */
  --background: ${tokens.colors.neutral.black};
  --foreground: ${tokens.colors.neutral.gray[50]};
  --card: ${tokens.colors.neutral.gray[900]};
  --card-foreground: ${tokens.colors.neutral.gray[50]};
  --primary: ${tokens.colors.brand.orange[500]};
  --primary-foreground: ${tokens.colors.neutral.white};
  --border: rgba(255, 255, 255, 0.1);
}
${END_MARKER}`;

  const currentFileContent = fs.readFileSync(GLOBALS_CSS_PATH, "utf-8");
  const startIdx = currentFileContent.indexOf(START_MARKER);
  const endIdx = currentFileContent.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.error("Markers not found in globals.css");
    process.exit(1);
  }

  const updatedContent =
    currentFileContent.substring(0, startIdx) +
    newContent +
    currentFileContent.substring(endIdx + END_MARKER.length);

  if (process.argv.includes("--check")) {
    if (currentFileContent !== updatedContent) {
      console.error("Design tokens are out of sync with globals.css. Run 'npm run tokens' to sync.");
      process.exit(1);
    }
    console.log("Design tokens are in sync.");
  } else {
    fs.writeFileSync(GLOBALS_CSS_PATH, updatedContent);
    console.log("Successfully updated globals.css with design tokens.");
  }
}

generateCss();
