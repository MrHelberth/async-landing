export async function fetchData(urlApi, options) {
  const respond = await fetch(urlApi, options);
  const data = await respond.json();
  return data;
}
