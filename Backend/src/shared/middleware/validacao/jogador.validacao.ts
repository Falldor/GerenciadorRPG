import {  Request, Response ,NextFunction } from "express";

export class validacaoJogador {
    validaCriar(req: Request, res: Response, next: NextFunction) {
        const { usuario, senha} = req.body;

        if (usuario) {
            if (typeof usuario !== 'string') {
                return res.status(400).json({ message: "O campo usuario deve ser uma string, insira um usuario válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo usuario é obrigatório" });
        }

        if (senha) {
            if (typeof senha !== 'string') {
                return res.status(400).json({ message: "O campo senha deve ser uma string, insira uma senha válida" });
            }
        } else {
            return res.status(400).json({ message: "O campo senha é obrigatório" });
        }

        
        return next();
    }

    validaId(req: Request, res: Response, next: NextFunction){
        const id = req.body
        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }

    validaAtualizar(req: Request, res: Response, next: NextFunction){
        const {id, usuario, senha} = req.body
        if (id) {
            if (typeof id !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
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
