"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacaoMestre = void 0;
class validacaoMestre {
    validaCriar(req, res, next) {
        const { usuario, senha } = req.body;
        if (usuario) {
            if (typeof (usuario) !== 'string') {
                return res.status(400).json({ message: "O campo usuario deve ser uma string, insira um usuario valido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo usuario é obrigatorio" });
        }
        if (senha) {
            if (typeof (senha) !== 'string') {
                return res.status(400).json({ message: "O campo senha deve ser uma string, insira uma senha valido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo senha é obrigatorio" });
        }
        return next();
    }
    validaPegaPorId(req, res, next) {
        const id = req.body;
        if (id) {
            if (typeof (id) !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id valido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatorio" });
        }
    }
    validaAtualizar(req, res, next) {
        const { id, usuario, senha } = req.body;
        if (id) {
            if (typeof (id) !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id valido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatorio" });
        }
        if (usuario) {
            if (typeof (usuario) !== 'string') {
                return res.status(400).json({ message: "O campo usuario deve ser uma string, insira um usuario valido" });
            }
        }
        if (senha) {
            if (typeof (senha) !== 'string') {
                return res.status(400).json({ message: "O campo senha deve ser uma string, insira uma senha valido" });
            }
        }
        return next();
    }
    validaDeletar(req, res, next) {
        const id = req.body;
        if (id) {
            if (typeof (id) !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id valido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatorio" });
        }
    }
}
exports.validacaoMestre = validacaoMestre;
