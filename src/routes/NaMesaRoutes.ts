import { Router } from "express";
import { NaMesaController } from "../Controllers/NaMesaController";

const router = Router();
const naMesaController = new NaMesaController()

router.post('/addPlayer/', naMesaController.addJogador)
router.post('/addMonstro/', naMesaController.addMonstro)
/*router.get('/getAllplayers/', naMesaController.getAllplayers)
router.get('/getAllMonster/', naMesaController.getAllMonster)
router.get('/getById/:id', naMesaController.getById)
router.put('/edit/:id', naMesaController.update)
router.delete('/delete/:id', naMesaController.outMesa)*/

export default router