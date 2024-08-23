import { Router } from "express";
import { JogadorController } from "../Controllers/JogadorController";



const router = Router();
const jogadorController = new JogadorController()

router.post('/register/', jogadorController.create)
router.get('/getAll/', jogadorController.getAll)
router.get('/getById/:id', jogadorController.getById)
router.put('/edit/:id', jogadorController.update)
router.delete('/delete/:id', jogadorController.delete)

export default router