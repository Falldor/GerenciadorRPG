import { Router } from "express";
import { HabilidadeController } from "../Controllers/HabilidadeController";
import { authenticateTokenMiddleware } from "../shared/middleware/autenticacao";
import { validacaoHabilidade } from "../shared/middleware/validacao/habilidade.validacao";

const router = Router();
const habilidadeController = new HabilidadeController()
const validaHabilidade = new validacaoHabilidade()

router.post('/create/', authenticateTokenMiddleware,validaHabilidade.validaCriar,habilidadeController.create)
router.get('/getAll/', authenticateTokenMiddleware,habilidadeController.getAll)
router.get('/getById/:id', authenticateTokenMiddleware,validaHabilidade.validaId,habilidadeController.getById)
router.put('/edit/:id', authenticateTokenMiddleware,validaHabilidade.validaAtualizar,habilidadeController.update)
router.delete('/delete/:id', authenticateTokenMiddleware,validaHabilidade.validaId,habilidadeController.delete)

export default router