const API_URL = "http://localhost:3000/api";

export async function getUno() {
  try {
    const response = await fetch(API_URL + "/uno");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getDos() {
  try {
    const response = await fetch(API_URL + "/dos");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return json;
  }
}

export async function getTres() {
  try {
    const response = await fetch(API_URL + "/tres");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return json;
  }
}

export async function getCuatro(gameSales2, setGameSales2) {
  try {
    const response = await fetch(API_URL + "/cuatro");
    setGameSales2(await response.json());
    console.log("Cuatro ", gameSales2);
  } catch (error) {
    console.error(error);
  }
}

export async function getCinco(countries) {
  try {
    const response = await fetch(
      API_URL + "/cinco?" + new URLSearchParams({ countries: countries })
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function getSeis() {
  try {
    const response = await fetch(API_URL + "/seis");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return json;
  }
}

export async function getSiete(lowerYear, upperYear) {
  try {
    const response = await fetch(
      API_URL +
        "/siete?" +
        new URLSearchParams({ lowerYear: lowerYear, upperYear: upperYear })
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return json;
  }
}

export async function getOcho(lowerRating, upperRating) {
  try {
    const response = await fetch(
      API_URL +
        "/ocho?" +
        new URLSearchParams({
          lowerRating: lowerRating,
          upperRating: upperRating,
        })
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return json;
  }
}

export async function getNueve() {
  try {
    const response = await fetch(API_URL + "/nueve");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return json;
  }
}
