import { Router } from "express";
import { JogadorController } from "../Controllers/jogadorController";


const router = Router();
const jogadorController = new JogadorController()

export default router