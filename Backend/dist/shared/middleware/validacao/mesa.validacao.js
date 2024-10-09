"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacaoMesa = void 0;
class validacaoMesa {
    validaCriar(req, res, next) {
        const { mestreId } = req.body;
        if (mestreId) {
            if (typeof mestreId !== 'string') {
                return res.status(400).json({ message: "O campo mestreId deve ser uma string, insira um mestreId válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo mestreId é obrigatório" });
        }
        return next();
    }
    validaId(req, res, next) {
        const idMesa = req.params.idMesa;
        if (idMesa) {
            if (typeof idMesa !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }
    validaIdMestre(req, res, next) {
        const { mestreId } = req.body;
        if (mestreId) {
            if (typeof mestreId !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }
}
exports.validacaoMesa = validacaoMesa;
