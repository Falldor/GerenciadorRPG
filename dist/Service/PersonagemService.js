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
exports.PersonagemService = void 0;
const PersonagemRepository_1 = require("../Repository/PersonagemRepository");
const personagemRepository = new PersonagemRepository_1.PersonagemRepository();
class PersonagemService {
    create(JogadorId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, historia } = body;
            const personagem = personagemRepository.create(JogadorId, nome, historia);
            return personagem;
        });
    }
    getAll(JogadorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return personagemRepository.getAll(JogadorId);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return personagemRepository.getById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return personagemRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            personagemRepository.delete(id);
        });
    }
}
exports.PersonagemService = PersonagemService;
