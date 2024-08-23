import { Router } from "express";
import { MonstroController } from "../Controllers/MonstroController";

const router = Router();
const monstroController = new MonstroController()

router.post('/create/', monstroController.create)
router.get('/getAll/', monstroController.getAll)
router.get('/getById/:id', monstroController.getById)
router.put('/edit/:id', monstroController.update)
router.delete('/delete/:id', monstroController.delete)

export default router