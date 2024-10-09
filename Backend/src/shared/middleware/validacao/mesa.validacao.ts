import {  Request, Response ,NextFunction } from "express";

export class validacaoMesa {

    validaCriar(req: Request, res: Response, next: NextFunction) {
        const {mestreId} = req.body;

        if (mestreId) {
            if (typeof mestreId !== 'string') {
                return res.status(400).json({ message: "O campo mestreId deve ser uma string, insira um mestreId válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo mestreId é obrigatório" });
        }

        

        return next();
    }

    validaId(req: Request, res: Response, next: NextFunction){
        const idMesa = req.params.idMesa;
        if (idMesa) {
            if (typeof idMesa !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }

    validaIdMestre(req: Request, res: Response, next: NextFunction){
        const {mestreId} = req.body;
        if (mestreId) {
            if (typeof mestreId !== 'string') {
                return res.status(400).json({ message: "O campo id deve ser uma string, insira um id válido" });
            }
        } else {
            return res.status(400).json({ message: "O campo id é obrigatório" });
        }
        return next();
    }

}
