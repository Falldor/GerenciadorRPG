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
exports.JogadorRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class JogadorRepository {
    create(usuario, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoJogador = prisma.jogador.create({
                data: {
                    usuario,
                    senha
                }
            });
            return novoJogador;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.jogador.findMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.jogador.findUnique({ where: { id } });
        });
    }
    getByEmail(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.jogador.findFirst({ where: { usuario } });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.jogador.update({ where: { id }, data });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.jogador.delete({ where: { id } });
        });
    }
}
exports.JogadorRepository = JogadorRepository;
