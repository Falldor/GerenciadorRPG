import { Router } from "express";
import { MonstroController } from "../Controllers/MonstroController";




const router = Router();
const monstroController = new MonstroController()

export default router