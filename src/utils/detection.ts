import { existsSync } from "node:fs";
import { join } from "node:path";

export function isOpenSpecProject(directory: string): boolean {
  const openspecDir = join(directory, "openspec");
  return (
    existsSync(join(openspecDir, "config.yaml")) ||
    existsSync(join(openspecDir, "AGENTS.md"))
  );
}
