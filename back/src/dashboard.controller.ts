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
  const genres = await getTopGenresByCountry();
  res.status(200).send({ genres });
}

export async function getSix(req: Request, res: Response) {
  const totalSales = await getTotalSalesByYear();
  res.status(200).send({ totalSales });
}

export async function getSeven(req: Request, res: Response) {
  const games = await getTopSellingGamesEachFiveYears();
  res.status(200).send({ games });
}

export async function getEight(req: Request, res: Response) {
  const sales = await getSalesOfBestRatedGames();
  res.status(200).send({ sales });
}

export async function getNine(req: Request, res: Response) {
  const wishlist = await getWishlist();
  res.status(200).send({ wishlist });
}
