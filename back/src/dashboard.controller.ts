import { Request, Response } from "express";
import {
  getGameSalesByPlatform,
  getSalesByCountry,
  getSalesOfBestRatedGames,
  getTopGenresByCountry,
  getTopSellingGamesEachFiveYears,
  getTotalSalesByGame,
  getTotalSalesByPlatform,
  getTotalSalesByYear,
  getWishlist,
} from "./dashboard.data.js";

export async function getOne(req: Request, res: Response) {
  const platformSales = await getTotalSalesByPlatform();
  res.status(200).send({ platformSales });
}

export async function getTwo(req: Request, res: Response) {
  const gameByConsole = await getGameSalesByPlatform();
  const gameMap = new Map<string, { platform: string; sales: number }[]>();
  for (let i = 0; i < gameByConsole.length; i++) {
    if (gameMap.get(gameByConsole[i].game) == undefined) {
      gameMap.set(gameByConsole[i].game, [
        { platform: gameByConsole[i].platform, sales: gameByConsole[i].sales },
      ]);
    } else {
      gameMap.get(gameByConsole[i].game)?.push({
        platform: gameByConsole[i].platform,
        sales: gameByConsole[i].sales,
      });
    }
  }
  const games = new Array<{
    game: string;
    sales: { platform: string; sales: number }[];
  }>();
  for (let entry of gameMap.entries()) {
    games.push({
      game: entry[0],
      sales: entry[1],
    });
  }
  res.status(200).send({ games });
}

export async function getThree(req: Request, res: Response) {
  const gameSales = await getTotalSalesByGame();
  res.status(200).send({ gameSales });
}

export async function getFour(req: Request, res: Response) {
  const gameSales = await getSalesByCountry();
  res.status(200).send({ gameSales });
}

export async function getFive(req: Request, res: Response) {
  const countriesQuery = req.query.countries as string;
  const countries = countriesQuery.split("_");
  var paramsSQL = "(";
  for (let i = 0; i < countries.length; i++) {
    paramsSQL += "?,";
  }
  paramsSQL = paramsSQL.substring(0, paramsSQL.length - 1) + ")";
  const genres = await getTopGenresByCountry(countries, paramsSQL);
  res.status(200).send({ genres });
}

export async function getSix(req: Request, res: Response) {
  const totalSales = await getTotalSalesByYear();
  res.status(200).send({ totalSales });
}

export async function getSeven(req: Request, res: Response) {
  const lowerYear = req.query.lowerYear as string;
  const upperYear = req.query.upperYear as string;
  const games = await getTopSellingGamesEachFiveYears(
    lowerYear + "-01-01",
    upperYear + "-12-31"
  );
  res.status(200).send({ games });
}

export async function getEight(req: Request, res: Response) {
  const lowerRating = req.query.lowerRating as string;
  const upperRating = req.query.upperRating as string;
  const sales = await getSalesOfBestRatedGames(lowerRating, upperRating);
  res.status(200).send({ sales });
}

export async function getNine(req: Request, res: Response) {
  const wishlist = await getWishlist();
  res.status(200).send({ wishlist });
}
