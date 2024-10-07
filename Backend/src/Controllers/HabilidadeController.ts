import { Request, Response } from 'express'
import { habilidade, PrismaClient, tipoHabilidade } from '@prisma/client'
import { HabilidadeService} from '../Service/HabilidadeService'

const hablidadeService = new HabilidadeService()

export class HabilidadeController{

    async create(req: Request, res: Response) {
        try {
            return res.status(201).json({ message: "habilidade criada com sucesso", resource: await hablidadeService.create(req.body) })
        } catch (error) {
            return res.status(500).json({ error: error })
        }

    }

    async getAll(req: Request, res: Response) {
        try {
            const Hablidades = await hablidadeService.getAll()
            if (Hablidades.length > 0) {
                return res.status(200).json({ message: "Lista de habilidades criados:", resource: Hablidades })
            } else {
                return res.status(200).json({ message: "nenhuma habilidade foi criada", resource: Hablidades })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }

    async getAllTipo(req: Request, res: Response) {
        try {
            let Habilidades:habilidade[] = []
            if(req.params.tipo == tipoHabilidade.fisico){
                Habilidades = await hablidadeService.getAllTipo(tipoHabilidade.fisico)
            }else{
                Habilidades = await hablidadeService.getAllTipo(tipoHabilidade.mental)
            }
            if (Habilidades.length > 0) {
                return res.status(200).json(Habilidades)
            } else {
                return res.status(200).json(Habilidades)
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const Hablidade = await hablidadeService.getById(req.params.id)
            if (Hablidade) {
                return res.status(200).json({ message: "Habilidade:", resource: Hablidade })
            } else {
                return res.status(200).json({ message: "Nenhuma habilidade foi cadastrado com o id " + req.params.id })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ resource: error })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const novaHabilidade = await hablidadeService.update(id, req.body)
            if (novaHabilidade) {
                return res.status(200).json({ message: "Habilidade:", resource: novaHabilidade })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ resource: error })
        }
    }

    async delete(req: Request, res: Response) {
        try {

            await hablidadeService.delete(req.params.id)
            res.status(204).json({ message: "Deletado com sucesso" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ resource: error })
        }
    }
}