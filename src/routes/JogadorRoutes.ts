import { Router } from "express";
import { JogadorController } from "../Controllers/JogadorController";
import { authenticateTokenMiddleware } from '../shared/middleware/autenticacao';



const router = Router();
const jogadorController = new JogadorController()

router.post('/register/', jogadorController.create)
router.get('/getAll/', authenticateTokenMiddleware,jogadorController.getAll)
router.get('/getById/:id', authenticateTokenMiddleware,jogadorController.getById)
router.put('/edit/:id', authenticateTokenMiddleware,jogadorController.update)
router.delete('/delete/:id', authenticateTokenMiddleware,jogadorController.delete)

export default router