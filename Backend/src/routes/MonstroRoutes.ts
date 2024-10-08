import { Router } from "express";
import { MonstroController } from "../Controllers/MonstroController";
import { validacaoMonstro } from "../shared/middleware/validacao/monstro.validacao";
import { authenticateTokenMiddleware } from "../shared/middleware/autenticacao";

const router = Router();
const monstroController = new MonstroController()
const validaMonstro = new validacaoMonstro()

router.post('/create/',validaMonstro.validaCriar,monstroController.create)
router.get('/getAll/',monstroController.getAll)
router.get('/getById/:id', authenticateTokenMiddleware,validaMonstro.validaId,monstroController.getById)
router.put('/edit/:id',validaMonstro.validaAtulizar,monstroController.update)
router.delete('/delete/:id',validaMonstro.validaId,monstroController.delete)

export default router