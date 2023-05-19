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

export async function getTopGame() {
  var query = dashboardQueries.totalSalesByGame;
  query = query.substring(0, query.length - 1) + " limit 1;";
  const game = await execute<
    { game: string; totalSales: number } & RowDataPacket
  >(query, []);
  return game[0].game;
}

export async function getTopPlatform() {
  const platform = await execute<{ platform: string } & RowDataPacket>(
    dashboardQueries.topPlatform,
    []
  );
  return platform[0].platform;
}

export async function getTopYear() {
  const year = await execute<{ year: string } & RowDataPacket>(
    dashboardQueries.topYear,
    []
  );
  return year[0].year;
}

export async function getTopGenre() {
  const genre = await execute<{ genre: string } & RowDataPacket>(
    dashboardQueries.topGenre,
    []
  );
  return genre[0].genre;
}

export async function getTopWishlistedGame() {
  var query = dashboardQueries.wishlist;
  query = query.substring(0, query.length - 1) + " limit 1;";
  const game = await execute<
    { game: string; wishlist: string } & RowDataPacket
  >(query, []);
  return game[0].game;
}

export async function getAverageSales() {
  const sales = await execute<{ totalAverageSales: number } & RowDataPacket>(
    dashboardQueries.averageSales,
    []
  );
  return sales[0].totalAverageSales;
}
