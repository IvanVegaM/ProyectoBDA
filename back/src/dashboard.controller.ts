import { Request, Response } from "express";
import {
  getBestRatedGames,
  getGameSalesByPlatform,
  getSalesOfBestRatedGames,
  getTopCountryByGame,
  getTopSellingGames,
  getTopSellingGamesEachFiveYears,
  getTopSellingGenres,
  getTotalSalesByGame,
  getTotalSalesByPlatform,
  getTotalSalesByYear,
  getWishlist,
  getWorstGames,
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
  const topCountry = await getTopCountryByGame();
  res.status(200).send({ topCountry });
}

export async function getFive(req: Request, res: Response) {
  const worstGames = await getWorstGames();
  res.status(200).send({ worstGames });
}

export async function getSix(req: Request, res: Response) {
  const totalSalesByYear = await getTotalSalesByYear();
  res.status(200).send({ totalSalesByYear });
}

export async function getSeven(req: Request, res: Response) {
  const topSellingGames = await getTopSellingGames();
  res.status(200).send({ topSellingGames });
}

export async function getEight(req: Request, res: Response) {
  const topSellingGames = await getTopSellingGamesEachFiveYears();
  res.status(200).send({ topSellingGames });
}

export async function getNine(req: Request, res: Response) {
  const topSellingGenres = await getTopSellingGenres();
  res.status(200).send({ topSellingGenres });
}

export async function getTen(req: Request, res: Response) {
  const bestRatedGames = await getBestRatedGames();
  res.status(200).send({ bestRatedGames });
}

export async function getEleven(req: Request, res: Response) {
  const salesBestRatedGames = await getSalesOfBestRatedGames();
  res.status(200).send({ salesBestRatedGames });
}

export async function getTwelve(req: Request, res: Response) {
  const wishlist = await getWishlist();
  res.status(200).send({ wishlist });
}
