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
exports.MestreController = void 0;
const MestreService_1 = require("../Service/MestreService");
const mestreService = new MestreService_1.MestreService();
class MestreController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "mestre criado com sucesso", resource: yield mestreService.create(req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mestres = yield mestreService.getAll();
                if (mestres.length > 0) {
                    return res.status(200).json({ message: "Lista de mestres cadastrados:", resource: mestres });
                }
                else {
                    return res.status(200).json({ message: "nenhum mestre foi cadastrado", resource: mestres });
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
                const mestre = yield mestreService.getById(req.params.id);
                if (mestre) {
                    return res.status(200).json({ message: "Mestre:", resource: mestre });
                }
                else {
                    return res.status(200).json({ message: "Nenhum mestre foi cadastrado com o id " + req.params.id });
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
                const novoMestre = yield mestreService.update(id, req.body);
                if (novoMestre) {
                    return res.status(200).json({ message: "Mestre:", resource: novoMestre });
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
                yield mestreService.delete(req.params.id);
                res.status(204).json({ message: "Deletado com sucesso" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
}
exports.MestreController = MestreController;
