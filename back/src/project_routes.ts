import { Router } from "@awaitjs/express";
import {
  getEight,
  getFive,
  getFour,
  getNine,
  getOne,
  getSeven,
  getSix,
  getThree,
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

export default router;
