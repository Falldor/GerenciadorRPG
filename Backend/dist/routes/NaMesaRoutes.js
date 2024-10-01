"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NaMesaController_1 = require("../Controllers/NaMesaController");
const router = (0, express_1.Router)();
const naMesaController = new NaMesaController_1.NaMesaController();
router.post('/addPlayer/', naMesaController.addJogador);
router.post('/addMonstro/', naMesaController.addMonstro);
/*router.get('/getAllplayers/', naMesaController.getAllplayers)
router.get('/getAllMonster/', naMesaController.getAllMonster)
router.get('/getById/:id', naMesaController.getById)
router.put('/edit/:id', naMesaController.update)
router.delete('/delete/:id', naMesaController.outMesa)*/
exports.default = router;
