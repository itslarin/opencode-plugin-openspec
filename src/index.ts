import { Plugin } from "@opencode/plugin";
import { createAgentConfig } from "./config";
import { isOpenSpecProject } from "./utils/detection";

export default Plugin.define({
  id: "opencode-plugin-openspec",
  async setup(ctx) {
    const directory = ctx.location.directory;
    if (!isOpenSpecProject(directory)) return;

    const agent = createAgentConfig();
    await ctx.agent.transform((editor) => {
      editor.update("openspec-plan", agent);
    });
  },
});
