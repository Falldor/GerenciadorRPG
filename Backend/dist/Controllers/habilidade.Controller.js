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
exports.habilidadeController = void 0;
const client_1 = require("@prisma/client");
class habilidadeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const prisma = new client_1.PrismaClient();
                const { nome, descricao, tipo } = req.body;
                const habilidade = yield prisma.habilidade.create({
                    data: {
                        nome,
                        descricao,
                        tipo
                    }
                });
                return res.status(201).json({ resource: habilidade });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ resource: error });
            }
        });
    }
}
exports.habilidadeController = habilidadeController;
