export async function getCities() {
  const res = await fetch("https://67db452f1fd9e43fe4741f5d.mockapi.io/api/cities");
  const data = await res.json();
  return data;
}