import { Router } from "express";
import { MesaController } from "../Controllers/mesaController";



const router = Router();
const mesaController = new MesaController();


export default router