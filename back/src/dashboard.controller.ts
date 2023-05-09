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
  res.status(200).send({ gameByConsole });
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
  const countries = countriesQuery.split("_").map(x => `'${x}'`)
  const countriesString = countries.toString();
  const genres = await getTopGenresByCountry(countriesString);
  res.status(200).send({ genres });
}

export async function getSix(req: Request, res: Response) {
  const totalSales = await getTotalSalesByYear();
  res.status(200).send({ totalSales });
}

export async function getSeven(req: Request, res: Response) {
  const lowerYear = req.query.lowerYear as string;
  const upperYear = req.query.upperYear as string;
  const games = await getTopSellingGamesEachFiveYears(lowerYear, upperYear);
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
