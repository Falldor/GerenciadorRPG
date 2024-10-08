import {  Request, Response ,NextFunction } from "express";

export class validacaoPersonagem {
    validaCriar(req: Request, res: Response, next: NextFunction) {
        const idJogador = req.params.jogadorId
        const { nome, historia } = req.body;

        if (nome) {
            if (typeof nome !== 'string') {
                return res.status(400).json({ message: "O campo nome deve ser uma string, insira um nome válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo nome é obrigatório" });
        }

        if (historia) {
            if (typeof historia !== 'string') {
                return res.status(400).json({ message: "O campo historia deve ser uma string, insira uma historia válida" });
            }
        }else{
            return res.status(400).json({ message: "O campo historia é obrigatório" });
        }

        if (idJogador) {
            if (typeof idJogador !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }

        return next();
    }

    validaId(req: Request, res: Response, next: NextFunction){
        const id = req.params.id
        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }

    validaIdJogador(req: Request, res: Response, next: NextFunction){
        const idJogador = req.body
        if (idJogador) {
            if (typeof idJogador !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }

    validaAtulizar(req: Request, res: Response, next: NextFunction){
        const id = req.params.id
        const {nome, historia} = req.body

        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
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
