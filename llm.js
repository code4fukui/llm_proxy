export const llm = async (prompt, endpoint) => {
  // GET
  const url = endpoint + "?p=" + encodeURIComponent(prompt);
  const text = await (await fetch(url)).text();
  // POST
  /*
  const body = JSON.stringify("p=" + prompt);
  const text = await (await fetch(endpoint, { method: "POST", body })).text();
  */
  return text;
};
