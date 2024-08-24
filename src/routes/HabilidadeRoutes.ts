import { Router } from "express";
import { HabilidadeController } from "../Controllers/HabilidadeController";

const router = Router();
const habilidadeController = new HabilidadeController()

router.post('/create/', habilidadeController.create)
router.get('/getAll/', habilidadeController.getAll)
router.get('/getById/:id', habilidadeController.getById)
router.put('/edit/:id', habilidadeController.update)
router.delete('/delete/:id', habilidadeController.delete)

export default router