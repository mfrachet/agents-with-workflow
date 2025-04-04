import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { Memory } from "@mastra/memory";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents";

const memory = new Memory({
  options: {
    lastMessages: 5, // Keep 5 most recent messages
  },
});

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
  memory,
});
