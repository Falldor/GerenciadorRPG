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
exports.MesaController = void 0;
const MesaService_1 = require("../Service/MesaService");
const mesaService = new MesaService_1.MesaService();
class MesaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(201).json({ message: "mesa criada com sucesso", resource: yield mesaService.create(req.body) });
            }
            catch (error) {
                return res.status(500).json({ error: error });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { mestreId } = req.params;
                const mesas = yield mesaService.getAll(mestreId);
                if (mesas.length > 0) {
                    return res.status(200).json({ message: "Lista de mesa cadastradas:", resource: mesas });
                }
                else {
                    return res.status(200).json({ message: "nenhuma mesa foi cadastrada", resource: mesas });
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
                const mesa = yield mesaService.getById(req.params.idMesa);
                if (mesa) {
                    return res.status(200).json({ message: "Mestre:", resource: mesa });
                }
                else {
                    return res.status(200).json({ message: "Nenhuma mesa foi cadastrado com o id " + req.params.id });
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
                const novaMesa = yield mesaService.update(id, req.body);
                if (novaMesa) {
                    return res.status(200).json({ message: "Mestre:", resource: novaMesa });
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
                yield mesaService.delete(req.params.idMesa);
                res.status(204).json({ message: "Deletada com sucesso" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ resource: error });
            }
        });
    }
}
exports.MesaController = MesaController;
