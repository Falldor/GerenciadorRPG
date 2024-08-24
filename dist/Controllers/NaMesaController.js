"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaMesaController = void 0;
const NaMesaService_1 = require("../Service/NaMesaService");
const naMesaService = new NaMesaService_1.NaMesaService();
class NaMesaController {
    addJogador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "Jogador(a) adcionado com sucesso na mesa",
                    resource: yield naMesaService.addJogador(req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    addMonstro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "Monstro adcionado com sucesso na mesa",
                    resource: yield naMesaService.addMonstro(req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
}
exports.NaMesaController = NaMesaController;
