import { Router } from "express";
import { MestreController } from "../Controllers/MestreController";
import { authenticateTokenMiddleware } from '../shared/middleware/autenticacao';
import { validacaoMestre } from "../shared/middleware/validacao/mestre.validacao";

const router = Router();
const mestreController = new MestreController();
const mestreValida = new validacaoMestre()

router.post('/register', mestreValida.validaCriar,mestreController.create)
router.get('/getAll', authenticateTokenMiddleware,mestreController.getAll)
router.get('/getById/:id', authenticateTokenMiddleware,mestreValida.validaPegaPorId,mestreController.getById)
router.put('/edit/:id', authenticateTokenMiddleware, mestreValida.validaAtualizar,mestreController.update)
router.delete('/delete/:id', authenticateTokenMiddleware,mestreValida.validaDeletar,mestreController.delete)
router.post('/login',mestreValida.validaCriar,mestreController.login)
export default router