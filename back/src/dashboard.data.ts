import { RowDataPacket } from "mysql2";
import dashboardQueries from "./dashboard.queries.js";
import { execute } from "./dataSource.js";

export async function getTotalSalesByPlatform(generation: string) {
  return await execute<
    { platform: string; totalSales: number } & RowDataPacket
  >(dashboardQueries.totalSalesByPlatform, generation);
}

export async function getGameSalesByPlatform() {
  return await execute<
    { game: string; platform: string; sales: number } & RowDataPacket
  >(dashboardQueries.gameSalesByPlatform, []);
}

export async function getTotalSalesByGame() {
  return await execute<{ game: string; totalSales: number } & RowDataPacket>(
    dashboardQueries.totalSalesByGame,
    []
  );
}

export async function getSalesByCountry() {
  return await execute<{ country: string; totalSales: number } & RowDataPacket>(
    dashboardQueries.totalSalesByCountry,
    []
  );
}

export async function getTopGenresByCountry(
  countries: string[],
  paramSQL: string
) {
  return await execute<{ genre: string; totalSales: number } & RowDataPacket>(
    dashboardQueries.topGenresByCountryPartOne +
      paramSQL +
      dashboardQueries.topGenresByCountryPartTwo,
    countries
  );
}

export async function getTotalSalesByYear() {
  return await execute<{ year: string; totalSales: number } & RowDataPacket>(
    dashboardQueries.totalSalesByYear,
    []
  );
}

export async function getTopSellingGamesEachFiveYears(
  lowerYear: string,
  upperYear: string
) {
  return await execute<
    { game: string; year: string; totalSales: number } & RowDataPacket
  >(dashboardQueries.topGamesEachFiveYears, [lowerYear, upperYear]);
}

export async function getSalesOfBestRatedGames(
  lowerRating: string,
  upperRating: string
) {
  return await execute<
    { game: string; rating: number; totalSales: number } & RowDataPacket
  >(dashboardQueries.totalSalesByGameRating, [lowerRating, upperRating]);
}

export async function getWishlist() {
  return await execute<{ game: string; wishlist: string } & RowDataPacket>(
    dashboardQueries.wishlist,
    []
  );
}
