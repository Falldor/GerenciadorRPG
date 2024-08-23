import { Router } from "express";
import { MesaController } from "../Controllers/MesaController";



const router = Router();
const mesaController = new MesaController();


export default router