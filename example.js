import { llm } from "./static/llm.js";

const endpoint = Deno.args[0] || "http://localhost:8000/api/";

const prompt = `ユーザー: 神はいますか？\nシステム: `;
const res = await llm(prompt, endpoint);
console.log(res);
