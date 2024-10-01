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
exports.NaMesaRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class NaMesaRepository {
    addJogador(mesaId, jogadorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoJogador = prisma.jogadoresMesa.create({
                data: {
                    mesaId,
                    jogadorId
                }
            });
            return novoJogador;
        });
    }
    addMonstro(mesaId, monstroId) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoMonstro = prisma.monstroMesa.create({
                data: {
                    mesaId,
                    monstroId
                }
            });
            return novoMonstro;
        });
    }
}
exports.NaMesaRepository = NaMesaRepository;
