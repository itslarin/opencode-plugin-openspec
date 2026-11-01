import { OPENSPEC_SYSTEM_PROMPT } from "./prompts";

export function createAgentConfig() {
  return {
    name: "OpenSpec Plan",
    mode: "primary" as const,
    description: "OpenSpec Architect - Plan and specify software architecture.",
    system: OPENSPEC_SYSTEM_PROMPT,
    color: "#FF6B6B",
    permissions: [
      // --- Exploration tools (read-only, no side effects) ---
      { action: "read", resource: "*", effect: "allow" },
      { action: "glob", resource: "*", effect: "allow" },
      { action: "grep", resource: "*", effect: "allow" },
      { action: "list", resource: "*", effect: "allow" },
      { action: "lsp", resource: "*", effect: "allow" },

      // --- Task management ---
      { action: "todoread", resource: "*", effect: "allow" },
      { action: "todowrite", resource: "*", effect: "allow" },

      // --- Web & search ---
      { action: "webfetch", resource: "*", effect: "allow" },
      { action: "websearch", resource: "*", effect: "allow" },
      { action: "codesearch", resource: "*", effect: "allow" },

      // --- Agent tooling ---
      { action: "task", resource: "*", effect: "allow" },
      { action: "skill", resource: "*", effect: "allow" },
      { action: "question", resource: "*", effect: "allow" },

      // --- Safety guards ---
      { action: "doom_loop", resource: "*", effect: "ask" },
      { action: "external_directory", resource: "*", effect: "ask" },

      // --- Edit: deny everything, allow only spec files ---
      // Rules are evaluated last-match-wins, so "*": "deny" must come first
      { action: "edit", resource: "*", effect: "deny" },
      { action: "edit", resource: "project.md", effect: "allow" },
      { action: "edit", resource: "AGENTS.md", effect: "allow" },
      { action: "edit", resource: "openspec/**", effect: "allow" },
      { action: "edit", resource: "specs/**", effect: "allow" },

      // --- Shell: deny all by default, allow read-only filesystem + git read ---
      { action: "shell", resource: "*", effect: "deny" },
      { action: "shell", resource: "openspec", effect: "allow" },
      { action: "shell", resource: "openspec *", effect: "allow" },
      { action: "shell", resource: "grep *", effect: "allow" },
      { action: "shell", resource: "ls", effect: "allow" },
      { action: "shell", resource: "ls *", effect: "allow" },
      { action: "shell", resource: "cat *", effect: "allow" },
      { action: "shell", resource: "find *", effect: "allow" },
      { action: "shell", resource: "echo", effect: "allow" },
      { action: "shell", resource: "echo *", effect: "allow" },
      { action: "shell", resource: "pwd", effect: "allow" },
      { action: "shell", resource: "which *", effect: "allow" },
      { action: "shell", resource: "env", effect: "allow" },
      { action: "shell", resource: "printenv *", effect: "allow" },
      { action: "shell", resource: "git status*", effect: "allow" },
      { action: "shell", resource: "git log*", effect: "allow" },
      { action: "shell", resource: "git diff*", effect: "allow" },
      { action: "shell", resource: "git show*", effect: "allow" },
    ],
  };
}
