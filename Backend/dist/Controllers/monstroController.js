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
exports.MonstroController = void 0;
const MonstroService_1 = require("../Service/MonstroService");
const monstroService = new MonstroService_1.MonstroService();
class MonstroController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json(yield monstroService.create(req.body));
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const monstros = yield monstroService.getAll();
                if (monstros.length > 0) {
                    return res.status(200).json(monstros);
                }
                else {
                    return res.status(200).json({ message: "nenhum monstro foi criado", resource: monstros });
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
                const monstro = yield monstroService.getById(req.params.id);
                if (monstro) {
                    return res.status(200).json({ message: "Monstros:", resource: monstro });
                }
                else {
                    return res.status(200).json({ message: "Nenhum monstro foi cadastrado com o id " + req.params.id });
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
                const novoMonstro = yield monstroService.update(id, req.body);
                if (novoMonstro) {
                    return res.status(200).json({ message: "Monstro:", resource: novoMonstro });
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
                yield monstroService.delete(req.params.id);
                res.status(204).json({ message: "Deletado com sucesso" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
}
exports.MonstroController = MonstroController;
