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
exports.PersonagemController = void 0;
const PersonagemService_1 = require("../Service/PersonagemService");
const personagemService = new PersonagemService_1.PersonagemService();
class PersonagemController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "Personagem criada com sucesso", resource: yield personagemService.create(req.params.jogadorId, req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    getAllPersonagensIdJogador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personagens = yield personagemService.getAllPersonagensIdJogador(req.params.jogadorId);
                if (personagens.length > 0) {
                    return res.status(200).json({ message: "Lista de personagens criados:", resource: personagens });
                }
                else {
                    return res.status(200).json({ message: "nenhum personagem foi criado", resource: personagens });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: error });
            }
        });
    }
    getAllPersonagens(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personagens = yield personagemService.getAllPersonagens();
                if (personagens.length > 0) {
                    return res.status(200).json(personagens);
                }
                else {
                    return res.status(200).json({ message: "nenhum personagem foi criado", resource: personagens });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: error });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personagem = yield personagemService.getById(req.params.id);
                if (personagem) {
                    return res.status(200).json({ message: "Personagem:", resource: personagem });
                }
                else {
                    return res.status(200).json({ message: "Nenhum personagem foi cadastrado com o id " + req.params.id });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const novoPersonagem = yield personagemService.update(id, req.body);
                if (novoPersonagem) {
                    return res.status(200).json({ message: "Personagem:", resource: novoPersonagem });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield personagemService.delete(req.params.id);
                res.status(204).json({ message: "Deletado com sucesso" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
}
exports.PersonagemController = PersonagemController;
