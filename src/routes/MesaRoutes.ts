import { Router } from "express";
import { MesaController } from "../Controllers/MesaController";



const router = Router();
const mesaController = new MesaController();

router.post('/create', mesaController.create)
router.get('/getAll/:mestreId', mesaController.getAll)
router.get('/getById/:idMesa', mesaController.getById)
router.put('/edit/:idMesa', mesaController.update)
router.delete('/delete/:idMesa', mesaController.delete)

export default router