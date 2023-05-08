import { Router } from "@awaitjs/express";
import {
  getEight,
  getEleven,
  getFive,
  getFour,
  getNine,
  getOne,
  getSeven,
  getSix,
  getTen,
  getThree,
  getTwelve,
  getTwo,
} from "./dashboard.controller.js";

const router = Router();

router.getAsync("/uno", getOne);
router.getAsync("/dos", getTwo);
router.getAsync("/tres", getThree);
router.getAsync("/cuatro", getFour);
router.getAsync("/cinco", getFive);
router.getAsync("/seis", getSix);
router.getAsync("/siete", getSeven);
router.getAsync("/ocho", getEight);
router.getAsync("/nueve", getNine);
router.getAsync("/diez", getTen);
router.getAsync("/once", getEleven);
router.getAsync("/doce", getTwelve);

export default router;
