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
exports.HabilidadeController = void 0;
const client_1 = require("@prisma/client");
const HabilidadeService_1 = require("../Service/HabilidadeService");
const hablidadeService = new HabilidadeService_1.HabilidadeService();
class HabilidadeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "habilidade criada com sucesso", resource: yield hablidadeService.create(req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Hablidades = yield hablidadeService.getAll();
                if (Hablidades.length > 0) {
                    return res.status(200).json({ message: "Lista de habilidades criados:", resource: Hablidades });
                }
                else {
                    return res.status(200).json({ message: "nenhuma habilidade foi criada", resource: Hablidades });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: error });
            }
        });
    }
    getAllTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let Habilidades = [];
                if (req.params.tipo == client_1.tipoHabilidade.fisico) {
                    Habilidades = yield hablidadeService.getAllTipo(client_1.tipoHabilidade.fisico);
                }
                else {
                    Habilidades = yield hablidadeService.getAllTipo(client_1.tipoHabilidade.mental);
                }
                if (Habilidades.length > 0) {
                    return res.status(200).json(Habilidades);
                }
                else {
                    return res.status(200).json(Habilidades);
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
                const Hablidade = yield hablidadeService.getById(req.params.id);
                if (Hablidade) {
                    return res.status(200).json({ message: "Habilidade:", resource: Hablidade });
                }
                else {
                    return res.status(200).json({ message: "Nenhuma habilidade foi cadastrado com o id " + req.params.id });
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
                const novaHabilidade = yield hablidadeService.update(id, req.body);
                if (novaHabilidade) {
                    return res.status(200).json({ message: "Habilidade:", resource: novaHabilidade });
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
                yield hablidadeService.delete(req.params.id);
                res.status(204).json({ message: "Deletado com sucesso" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
}
exports.HabilidadeController = HabilidadeController;
