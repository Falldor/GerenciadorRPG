import { Router } from "express";
import { PersonagemController } from "../Controllers/PersonagemController";
import { validacaoPersonagem } from "../shared/middleware/validacao/personagem.validacao";


const router = Router(); 
const personagemController = new PersonagemController()
const validaPersonagem = new validacaoPersonagem()


router.post('/create/:jogadorId', validaPersonagem.validaCriar,personagemController.create)
router.get('/getAllgetAllPersonagens/:jogadorId', validaPersonagem.validaIdJogador,personagemController.getAllPersonagensIdJogador)
router.get('/getAllPersonagens/',personagemController.getAllPersonagens)
router.get('/getById/:id', validaPersonagem.validaId,personagemController.getById)
router.put('/edit/:id', validaPersonagem.validaAtulizar,personagemController.update)
router.delete('/delete/:id', validaPersonagem.validaId,personagemController.delete)


export default router