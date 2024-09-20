import { Router } from "express";
import { JogadorController } from "../Controllers/JogadorController";
import { authenticateTokenMiddleware } from '../shared/middleware/autenticacao';
import { validacaoJogador } from "../shared/middleware/validacao/jogador.validacao";



const router = Router();
const jogadorController = new JogadorController()
const validaJogador = new validacaoJogador()

router.post('/register/', validaJogador.validaCriar,jogadorController.create)
router.get('/getAll/', jogadorController.getAll)
router.get('/getById/:id', validaJogador.validaId,jogadorController.getById)
router.put('/edit/:id', validaJogador.validaAtualizar,jogadorController.update)
router.delete('/delete/:id', validaJogador.validaId,jogadorController.delete)

export default router