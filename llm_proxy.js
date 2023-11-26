import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { endpoint } from "./endpoint.js";
import { log } from "./log.js";
import { llm } from "./llm.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const cache = {};

serveAPI("/api/", async (param, req, path, conninfo) => {
  const prompt = param.substring(2); // cut "p="
  const c = cache[prompt];
  if (c) {
    await log(prompt);
    await sleep(500);
    return c;
  }
  const response = await llm(prompt, endpoint);
  cache[prompt] = response;
  await log(prompt + response);
  return response;
});
