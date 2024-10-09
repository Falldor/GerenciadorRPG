"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacaoHabilidade = void 0;
class validacaoHabilidade {
    validaCriar(req, res, next) {
        const { nome, descricao, tipo } = req.body;
        if (nome) {
            if (typeof nome !== 'string') {
                return res.status(400).json({ message: "O campo nome deve ser uma string, insira um nome válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo nome é obrigatório" });
        }
        if (descricao) {
            if (typeof descricao !== 'string') {
                return res.status(400).json({ message: "O campo descricao deve ser uma string, insira uma descricao válida" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo descricao é obrigatório" });
        }
        if (tipo) {
            if (tipo != "fisico" && tipo != "mental") {
                return res.status(400).json({ message: "O campo tipo deve ser um valor válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo tipo é obrigatório" });
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
    validaAtualizar(req, res, next) {
        const id = req.params.id;
        const { nome, tipo, descricao } = req.body;
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
        if (descricao) {
            if (typeof descricao !== 'string') {
                return res.status(400).json({ message: "O campo descricao deve ser uma string, insira uma descricao válida" });
            }
        }
        if (tipo) {
            if (tipo != "fisico" && tipo != "mental") {
                return res.status(400).json({ message: "O campo tipo deve ser um valor válido" });
            }
        }
        return next();
    }
}
exports.validacaoHabilidade = validacaoHabilidade;
