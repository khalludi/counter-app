const BASE_URL: string = "PROD_URL";

export async function getCount(): Promise<number> {
  return fetch(BASE_URL + "counter")
    .then((res) => res.json())
    .then((data) => data.count);
}

export async function incrementCount(): Promise<number> {
  return fetch(BASE_URL + "counter?operation=increment", {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => data.Attributes.count);
}

export async function decrementCount(): Promise<number> {
  return fetch(BASE_URL + "counter?operation=decrement", {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => data.Attributes.count);
}
