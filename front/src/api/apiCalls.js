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

export async function getTres(gameSales, setGameSales) {
  try {
    const response = await fetch(API_URL + "/tres");
    setGameSales(await response.json());
    console.log("Tres ", gameSales);
  } catch (error) {
    console.error(error);
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

export async function getCinco(genres, setGenres) {
  try {
    const response = await fetch(
      API_URL + "/cinco?" + new URLSearchParams({ countries: "MX" })
    );
    setGenres(await response.json());
    console.log("Cinco ", genres);
  } catch (error) {
    console.error(error);
  }
}

export async function getSeis(totalSales, setTotalSales) {
  try {
    const response = await fetch(API_URL + "/seis");
    setTotalSales(await response.json());
    console.log("Seis ", totalSales);
  } catch (error) {
    console.error(error);
  }
}
