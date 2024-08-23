import { Request, Response } from 'express'
import { MestreRepository } from '../Repository/MestreRepository'

const mestreRepository = new MestreRepository()

export class MestreController {



    async create(req: Request, res: Response) {
        try {
            const { usuario, senha } = req.body
            const mestre = mestreRepository.create(usuario, senha)
            return res.json(mestre)
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }

    }

    async getAll(req: Request, res:Response){
        try {
            const mestres = mestreRepository.getAll()
            return res.status(200).json({message:"Lista de mestres cadastrados:", resource:mestres})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async getById(req: Request, res: Response){
        try {
            const mestre = mestreRepository.getById(req.body.id)
            return res.status(200).json({message: "Mestre:", resource: mestre})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async update(req: Request, res: Response){
        try {
            const {id, novaSenha} = req.body
            const novoMestre = mestreRepository.update(id, novaSenha)
            return res.status(200).json({message: "Mestre:", resource: novoMestre})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async delete(req: Request, res: Response){
        try {
            await mestreRepository.delete(req.body.id)
            res.status(204).json({message:"Deletado com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }


}