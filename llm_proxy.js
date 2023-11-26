import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { endpoint } from "./endpoint.js";
import { log } from "./log.js";
import { llm } from "./llm.js";

serveAPI("/api/", async (param, req, path, conninfo) => {
  const prompt = param.substring(2); // cut "p="
  const response = await llm(prompt, endpoint);
  await log(prompt + response);
  return response;
});
