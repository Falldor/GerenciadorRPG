"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacaoJogador = void 0;
class validacaoJogador {
    validaCriar(req, res, next) {
        const { usuario, senha } = req.body;
        if (usuario) {
            if (typeof usuario !== 'string') {
                return res.status(400).json({ message: "O campo usuario deve ser uma string, insira um usuario válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo usuario é obrigatório" });
        }
        if (senha) {
            if (typeof senha !== 'string') {
                return res.status(400).json({ message: "O campo senha deve ser uma string, insira uma senha válida" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo senha é obrigatório" });
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
        const { usuario, senha } = req.body;
        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        }
        else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        if (usuario) {
            if (typeof usuario !== 'string') {
                return res.status(400).json({ message: "O campo usuario deve ser uma string, insira um usuario válido" });
            }
        }
        if (senha) {
            if (typeof senha !== 'string') {
                return res.status(400).json({ message: "O campo senha deve ser uma string, insira uma senha válida" });
            }
        }
        return next();
    }
}
exports.validacaoJogador = validacaoJogador;
