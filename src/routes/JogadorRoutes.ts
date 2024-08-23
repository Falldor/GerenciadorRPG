import { Router } from "express";
import { JogadorController } from "../Controllers/JogadorController";



const router = Router();
const jogadorController = new JogadorController()

export default router