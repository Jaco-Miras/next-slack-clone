import { v } from "convex/values";
import { query } from "./_generated/server";
import { auth } from "./auth";

export const current = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);

    if (!userId) {
      return null;
    }
  },
});
