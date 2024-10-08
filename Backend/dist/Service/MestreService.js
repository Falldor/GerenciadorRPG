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
exports.MestreService = void 0;
const MestreRepository_1 = require("../Repository/MestreRepository");
const mestreRepository = new MestreRepository_1.MestreRepository();
class MestreService {
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, senha } = body;
            const mestre = mestreRepository.create(usuario, senha);
            return mestre;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return mestreRepository.getAll();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return mestreRepository.getById(id);
        });
    }
    geByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return mestreRepository.getByEmail(email);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return mestreRepository.update(id, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mestreRepository.delete(id);
        });
    }
    login(usuario, senha) {
        return __awaiter(this, void 0, void 0, function* () {
            const mestre = yield this.geByEmail(usuario);
            if ((mestre === null || mestre === void 0 ? void 0 : mestre.senha) == senha && mestre.usuario == usuario) {
                return true;
            }
            else
                return false;
        });
    }
}
exports.MestreService = MestreService;
