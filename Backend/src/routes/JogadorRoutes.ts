import { Router } from "express";
import { JogadorController } from "../Controllers/JogadorController";
import { authenticateTokenMiddleware } from '../shared/middleware/autenticacao';
import { validacaoJogador } from "../shared/middleware/validacao/jogador.validacao";



const router = Router();
const jogadorController = new JogadorController()
const validaJogador = new validacaoJogador()

router.post('/register/', validaJogador.validaCriar,jogadorController.create)
router.get('/getAll/', authenticateTokenMiddleware,jogadorController.getAll)
router.get('/getById/:id', authenticateTokenMiddleware,validaJogador.validaId,jogadorController.getById)
router.put('/edit/:id', authenticateTokenMiddleware,validaJogador.validaAtualizar,jogadorController.update)
router.delete('/delete/:id', authenticateTokenMiddleware,validaJogador.validaId,jogadorController.delete)
router.post('/login',validaJogador.validaCriar,jogadorController.login)
export default router