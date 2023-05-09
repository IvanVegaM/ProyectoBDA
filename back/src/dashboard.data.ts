import dashboardQueries from "./dashboard.queries.js";
import { execute } from "./dataSource.js";

export async function getTotalSalesByPlatform() {
  return await execute<{ platform: string; totalSales: number }[]>(
    dashboardQueries.totalSalesByPlatform,
    []
  );
}

export async function getGameSalesByPlatform() {
  return await execute<
    { game: string; total: { platform: string; sales: number }[] }[]
  >(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTotalSalesByGame() {
  return await execute<{ game: string; totalSales: number }[]>(
    dashboardQueries.totalSalesByGame,
    []
  );
}

export async function getSalesByCountry() {
  return await execute<{ country: string; totalSales: number }[]>(
    dashboardQueries.totalSalesByCountry,
    []
  );
}

export async function getTopGenresByCountry(countries: string) {
  return await execute<{ genre: string; totalSales: number }[]>(
    dashboardQueries.topGenresByCountry, countries
  );
}

export async function getTotalSalesByYear() {
  return await execute<{ year: string; totalSales: number }[]>(
    dashboardQueries.totalSalesByYear,
    []
  );
}

export async function getTopSellingGamesEachFiveYears(lowerYear: string, upperYear: string) {
  return await execute<{ game: string; year: string; totalSales: number }[]>(
    dashboardQueries.topGamesEachFiveYears, [lowerYear, upperYear]
  );
}

export async function getSalesOfBestRatedGames(lowerRating: string, upperRating: string) {
  return await execute<{ game: string; rating: number; totalSales: number }[]>(
    dashboardQueries.totalSalesByGameRating, [lowerRating, upperRating]
  );
}

export async function getWishlist() {
  return await execute<{ game: string; wishlist: string }[]>(
    dashboardQueries.wishlist,
    []
  );
}
