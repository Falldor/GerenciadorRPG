import { Router } from "express";
import { MesaController } from "../Controllers/MesaController";
import { validacaoMesa } from "../shared/middleware/validacao/mesa.validacao";
import { authenticateTokenMiddleware } from "../shared/middleware/autenticacao";



const router = Router();
const mesaController = new MesaController();
const validaMesa = new validacaoMesa()

router.post('/create', authenticateTokenMiddleware,validaMesa.validaCriar,mesaController.create)
router.get('/getAll/:mestreId', authenticateTokenMiddleware,authenticateTokenMiddleware,validaMesa.validaIdMestre, mesaController.getAll)
router.get('/getById/:idMesa', authenticateTokenMiddleware,validaMesa.validaId,mesaController.getById)
router.put('/edit/:idMesa',authenticateTokenMiddleware,validaMesa.validaId,mesaController.update)
router.put('/addMonstro/:idMesa', authenticateTokenMiddleware,validaMesa.validaId,mesaController.update)
router.put('/addPersonagem/:idMesa', authenticateTokenMiddleware,validaMesa.validaId,mesaController.update)
router.delete('/delete/:idMesa', authenticateTokenMiddleware,authenticateTokenMiddleware,validaMesa.validaId,mesaController.delete)

export default router