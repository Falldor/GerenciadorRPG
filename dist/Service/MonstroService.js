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
exports.MonstroService = void 0;
const MonstroRepository_1 = require("../Repository/MonstroRepository");
const monstroRepository = new MonstroRepository_1.MonstroRepository();
class MonstroService {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, historia } = body;
            const personagem = monstroRepository.create(nome, historia);
            return personagem;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return monstroRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return monstroRepository.getById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return monstroRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield monstroRepository.delete(id);
        });
    }
}
exports.MonstroService = MonstroService;
