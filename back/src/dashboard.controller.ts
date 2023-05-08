import { Request, Response } from "express";
import { getGameSalesByPlatform, getTopCountryByGame, getTotalSalesByGame, getTotalSalesByPlatform } from "./dashboard.data.js";

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

export aync function getFive(req: Request, res: Response) {
  const
}
