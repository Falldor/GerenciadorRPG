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
exports.HabilidadeService = void 0;
const HabilidadeRepository_1 = require("../Repository/HabilidadeRepository");
const habilidadeRepository = new HabilidadeRepository_1.HabilidadeRepository();
class HabilidadeService {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, descricao, tipo } = body;
            const habilidade = habilidadeRepository.create(nome, descricao, tipo);
            return habilidade;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return habilidadeRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return habilidadeRepository.getById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return habilidadeRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            habilidadeRepository.delete(id);
        });
    }
}
exports.HabilidadeService = HabilidadeService;
