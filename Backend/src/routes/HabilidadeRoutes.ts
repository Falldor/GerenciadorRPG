import { Router } from "express";
import { HabilidadeController } from "../Controllers/HabilidadeController";
import { authenticateTokenMiddleware } from "../shared/middleware/autenticacao";
import { validacaoHabilidade } from "../shared/middleware/validacao/habilidade.validacao";

const router = Router();
const habilidadeController = new HabilidadeController()
const validaHabilidade = new validacaoHabilidade()

router.post('/create',validaHabilidade.validaCriar,habilidadeController.create)
router.get('/getAll/',habilidadeController.getAll)
router.get('/getAll/:tipo',habilidadeController.getAllTipo)
router.get('/getById/:id',validaHabilidade.validaId,habilidadeController.getById)
router.put('/edit/:id',validaHabilidade.validaAtualizar,habilidadeController.update)
router.delete('/delete/:id',validaHabilidade.validaId,habilidadeController.delete)

export default router