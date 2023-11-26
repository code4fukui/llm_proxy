export const llm = async (prompt, endpoint = "/api/") => {
  // GET
  const url = endpoint + "?p=" + encodeURIComponent(prompt);
  const text = await (await fetch(url)).json();
  // POST
  /*
  const body = JSON.stringify("p=" + prompt);
  const text = await (await fetch(endpoint, { method: "POST", body })).text();
  */
  return text;
};
