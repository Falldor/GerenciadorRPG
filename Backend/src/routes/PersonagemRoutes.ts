import { Router } from "express";
import { PersonagemController } from "../Controllers/PersonagemController";
import { validacaoPersonagem } from "../shared/middleware/validacao/personagem.validacao";
import { authenticateTokenMiddleware } from "../shared/middleware/autenticacao";


const router = Router(); 
const personagemController = new PersonagemController()
const validaPersonagem = new validacaoPersonagem()


router.post('/create/:jogadorId', authenticateTokenMiddleware,validaPersonagem.validaCriar,personagemController.create)
router.get('/getAllPersonagens/:jogadorId', authenticateTokenMiddleware,validaPersonagem.validaIdJogador,personagemController.getAllPersonagensIdJogador)
router.get('/getAllPersonagens/',authenticateTokenMiddleware,personagemController.getAllPersonagens)
router.get('/getById/:id', authenticateTokenMiddleware,validaPersonagem.validaId,personagemController.getById)
router.put('/edit/:id', authenticateTokenMiddleware,validaPersonagem.validaAtulizar,personagemController.update)
router.delete('/delete/:id', authenticateTokenMiddleware,validaPersonagem.validaId,personagemController.delete)


export default router