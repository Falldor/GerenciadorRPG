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
exports.JogadorService = void 0;
const JogadorRepository_1 = require("../Repository/JogadorRepository");
const jogadorRepository = new JogadorRepository_1.JogadorRepository();
class JogadorService {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, senha } = body;
            const jogador = jogadorRepository.create(usuario, senha);
            return jogador;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return jogadorRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return jogadorRepository.getById(id);
        });
    }
    geByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return jogadorRepository.getByEmail(email);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return jogadorRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield jogadorRepository.delete(id);
        });
    }
    login(usuario, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            const jogador = yield this.geByEmail(usuario);
            if ((jogador === null || jogador === void 0 ? void 0 : jogador.senha) == senha && jogador.usuario == usuario) {
                return true;
            }
            else
                return false;
        });
    }
}
exports.JogadorService = JogadorService;
