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
exports.MesaService = void 0;
const MesaRepository_1 = require("../Repository/MesaRepository");
const mesaRepository = new MesaRepository_1.MesaRepository();
class MesaService {
    create(mestreId) {
        return __awaiter(this, void 0, void 0, function* () {
            const mesa = mesaRepository.create(mestreId);
            return mesa;
        });
    }
    getAll(mestreId) {
        return __awaiter(this, void 0, void 0, function* () {
            return mesaRepository.getAll(mestreId);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return mesaRepository.getById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return mesaRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mesaRepository.delete(id);
        });
    }
}
exports.MesaService = MesaService;
