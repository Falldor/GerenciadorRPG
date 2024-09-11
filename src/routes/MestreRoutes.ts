import { Router } from "express";
import { MestreController } from "../Controllers/MestreController";
import { authenticateTokenMiddleware } from '../shared/middleware/autenticacao';

const router = Router();
const mestreController = new MestreController();

router.post('/register', mestreController.create)
router.get('/getAll', authenticateTokenMiddleware,mestreController.getAll)
router.get('/getById/:id', authenticateTokenMiddleware,mestreController.getById)
router.put('/edit/:id', mestreController.update)
router.delete('/delete/:id', authenticateTokenMiddleware,mestreController.delete)
router.post('/login',mestreController.login)
export default router