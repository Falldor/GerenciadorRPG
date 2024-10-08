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
exports.PersonagemRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PersonagemRepository {
    create(jogadorId, nome, historia) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoPersonagem = prisma.personagem.create({
                data: {
                    jogadorId,
                    nome,
                    nivelFisico: 1,
                    nivelMental: 1,
                    xp: 10,
                    vida: 8,
                    estresse: 8,
                    historia
                }
            });
            return novoPersonagem;
        });
    }
    getAllPersonagensIdJogador(jogadorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.personagem.findMany({ where: { jogadorId } });
        });
    }
    getAllPersonagens() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.personagem.findMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.personagem.findUnique({ where: { id } });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            return yield prisma.personagem.update({ where: { id }, data });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.personagem.delete({ where: { id } });
        });
    }
}
exports.PersonagemRepository = PersonagemRepository;
