"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacaoMonstro = void 0;
class validacaoMonstro {
    validaCriar(req, res, next) {
        const { nome, historia } = req.body;
        if (nome) {
            if (typeof nome !== 'string') {
                return res.status(400).json({ message: "O campo nome deve ser uma string, insira um nome válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo nome é obrigatório" });
        }
        if (historia) {
            if (typeof historia !== 'string') {
                return res.status(400).json({ message: "O campo historia deve ser uma string, insira uma historia válida" });
            }
        }
        return next();
    }
    validaId(req, res, next) {
        const id = req.params.id;
        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }
    validaAtulizar(req, res, next) {
        const id = req.params.id;
        const { nome, historia } = req.body;
        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        if (nome) {
            if (typeof nome !== 'string') {
                return res.status(400).json({ message: "O campo nome deve ser uma string, insira um nome válido" });
            }
        }
        if (historia) {
            if (typeof historia !== 'string') {
                return res.status(400).json({ message: "O campo historia deve ser uma string, insira uma historia válida" });
            }
        }
        return next();
    }
}
exports.validacaoMonstro = validacaoMonstro;
