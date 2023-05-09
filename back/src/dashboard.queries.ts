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
  totalSalesByCountry: `select sales.country, sum(sales.totalSales) as totalSales from sales GROUP by country order by totalSales DESC;`,
  //TODO: Change to allow multiple countries in query below
  topGenresByCountry: `
    SELECT genres.name AS genre, SUM(sales.totalSales) AS totalSales
    FROM genres, gameGenre, sales WHERE
    sales.country = ? AND
    genres.id = gameGenre.genreId AND
    gameGenre.gameId = sales.gameId
    GROUP BY genres.id
    ORDER BY totalsales DESC;`,
  totalSalesByYear: `
    SELECT YEAR(games.releaseDate) AS year, SUM(sales.totalSales) AS totalSales FROM games, sales WHERE
    games.id = sales.gameId
    GROUP BY year
    ORDER BY year DESC;`,
  topGamesEachFiveYears: `
    SELECT games.title as game, YEAR(games.releaseDate) AS year, SUM(sales.totalSales) AS totalSales
    FROM games, sales WHERE
    games.id = sales.gameId and
    games.releaseDate BETWEEN '?-01-01' AND '?-12-31'
    GROUP BY games.id, year
    ORDER BY totalSales DESC
    LIMIT 10;`,
  totalSalesByGameRating: `
    SELECT games.title as game, games.rating, SUM(sales.totalSales) AS totalSales
    FROM games, sales WHERE
    games.id = sales.gameId
    games.rating BETWEEN ? AND ?
    GROUP BY games.id
    ORDER BY totalSales DESC;`,
  wishlist: `select games.title, games.wishlist from games order by games.wishlist DESC;`,
};
