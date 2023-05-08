import dashboardQueries from "./dashboard.queries.js";
import { execute } from "./dataSource.js";

export async function getTotalSalesByPlatform() {
  return await execute<{ platform: string, totalSales: number }[]>(dashboardQueries.totalSalesByPlatform, []);
}

export async function getGameSalesByPlatform() {
  return await execute<{ game: string, total: { platform: string, sales: number }[] }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTotalSalesByGame() {
  return await execute<{ game: string, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTopCountryByGame() {
  return await execute<{ game: string, countries: string[] }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getWorstGames() {
  return await execute<{ game: string, rating: number, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTotalSalesByYear() {
  return await execute<{ year: string, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTopSellingGames() {
  return await execute<{ game: string, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTopSellingGamesEachFiveYears() {
  return await execute<{ years: string, game: string, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTopSellingGenres() {
  return await execute<{ genre: string, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getBestRatedGames() {
  return await execute<{ game: string, rating: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getSalesOfBestRatedGames() {
  return await execute<{ game: string, rating: number, totalSales: number }[]>(dashboardQueries.gameSalesByPlatform, []);
}

export async function getWishlist() {
  return await execute<{ game: string, wishlist: string }[]>(dashboardQueries.gameSalesByPlatform, []);
}
