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
exports.JogadorController = void 0;
const JogadorService_1 = require("../Service/JogadorService");
const jogadorService = new JogadorService_1.JogadorService();
class JogadorController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "Jogador(a) criada com sucesso", resource: yield jogadorService.create(req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jogadores = yield jogadorService.getAll();
                if (jogadores.length > 0) {
                    return res.status(200).json({ message: "Lista de jogadores cadastradas:", resource: jogadores });
                }
                else {
                    return res.status(200).json({ message: "nenhum(a) jogador(a) foi cadastrado(a)", resource: jogadores });
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
                const jogador = yield jogadorService.getById(req.params.id);
                if (jogador) {
                    return res.status(200).json({ message: "JOgador(a):", resource: jogador });
                }
                else {
                    return res.status(200).json({ message: "Nenhum jogador(a) foi cadastrado com o id " + req.params.id });
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
                const novoJogador = yield jogadorService.update(id, req.body);
                if (novoJogador) {
                    return res.status(200).json({ message: "Mestre:", resource: novoJogador });
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
                yield jogadorService.delete(req.params.id);
                res.status(204).json({ message: "Deletada com sucesso" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
}
exports.JogadorController = JogadorController;
