import { Router } from "express";
import { PersonagemController } from "../Controllers/PersonagemController";


const router = Router(); 
const personagemController = new PersonagemController()



router.post('/create/:jogadorId', personagemController.create)
router.get('/getAll/:jogadorId', personagemController.getAll)
router.get('/getById/:id', personagemController.getById)
router.put('/edit/:id', personagemController.update)
router.delete('/delete/:id', personagemController.delete)


export default router