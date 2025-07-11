import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("Downloading Step", "10s");
    await step.sleep("Transcript Step", "10s");
    await step.sleep("Summary Step", "10s");
    return { message: `Hello ${event.data.email}!` };
  },
);