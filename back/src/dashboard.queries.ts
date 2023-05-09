export default {
  totalSalesByPlatform: `
    select platforms.name as platform, sum(sales.totalSales) as totalSales from platforms, sales WHERE 
    platforms.id = sales.platformId 
    GROUP by platforms.name;`,
  gameSalesByPlatform: `
    select games.title as game, platforms.name as platform, sum(sales.totalSales) as sales from platforms, sales, games WHERE
    platforms.id = sales.platformId AND
    games.id = sales.gameId
    GROUP by platforms.name, games.title
    order by games.title ASC;`,
  totalSalesByGame: `
    select games.title as game, sum(sales.totalSales) as totalSales from sales, games WHERE
    games.id = sales.gameId
    GROUP by games.title
    order by totalSales DESC;`,
  totalSalesByCountry: ``,
  topGenresByCountry: ``,
  totalSalesByYear: ``,
  topGamesEachFiveYears: ``,
  totalSalesByGameRating: ``,
  wishlist: ``,
};
