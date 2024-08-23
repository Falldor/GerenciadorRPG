import { Router } from "express";
import { HabilidadeController } from "../Controllers/habilidade.Controller";


const router = Router();
const habilidadeController = new HabilidadeController()

export default router