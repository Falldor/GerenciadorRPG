import { Router } from "express";
import { MestreController } from "../Controllers/MestreController";

const router = Router();
const mestreController = new MestreController();

router.post('/register', mestreController.create)
router.get('/getAll', mestreController.getAll)
router.get('/getById/:id', mestreController.getById)
router.put('/edit/:id', mestreController.update)
router.delete('/delete/:id', mestreController.delete)
export default router