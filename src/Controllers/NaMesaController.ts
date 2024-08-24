import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { NaMesaService} from '../Service/NaMesaService'

const naMesaService = new NaMesaService()

export class NaMesaController{

    async addJogador(req: Request, res: Response) {
        try {
            return res.status(201).json({ message: "Jogador(a) adcionado com sucesso na mesa", 
                resource: await naMesaService.addJogador(req.body) })
        } catch (error) {
            return res.status(500).json({ error: error })
        }

    }

    async addMonstro(req: Request, res: Response) {
        try {
            return res.status(201).json({ message: "Monstro adcionado com sucesso na mesa", 
                resource: await naMesaService.addMonstro(req.body) })
        } catch (error) {
            return res.status(500).json({ error: error })
        }

    }
    /*async getAll(req: Request, res: Response) {
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
    }*/
}