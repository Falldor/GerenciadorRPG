import { Router } from "express";
import { MonstroController } from "../Controllers/monstroController";



const router = Router();
const monstroController = new MonstroController()

export default router