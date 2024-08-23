import { Router } from "express";
import { HabilidadeController } from "../Controllers/HabilidadeController";



const router = Router();
const habilidadeController = new HabilidadeController()

export default router