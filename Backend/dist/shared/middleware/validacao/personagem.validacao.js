"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacaoPersonagem = void 0;
class validacaoPersonagem {
    validaCriar(req, res, next) {
        const { nome, historia, idJogador } = req.body;
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
        else {
            return res.status(400).json({ message: "O campo historia é obrigatório" });
        }
        if (idJogador) {
            if (typeof idJogador !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }
    validaId(req, res, next) {
        const id = req.body;
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
    validaIdJogador(req, res, next) {
        const idJogador = req.body;
        if (idJogador) {
            if (typeof idJogador !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }
    validaAtulizar(req, res, next) {
        const { id, nome, historia } = req.body;
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
exports.validacaoPersonagem = validacaoPersonagem;
