import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { MonstroService } from '../Service/MonstroService'

const monstroService = new MonstroService()
export class MonstroController {

    async create(req: Request, res: Response) {
        try {
            return res.status(201).json({ message: "Monstro criada com sucesso", resource: await monstroService.create(req.body) })
        } catch (error) {
            return res.status(500).json({ error: error })
        }

    }

    async getAll(req: Request, res: Response) {
        try {
            const monstros = await monstroService.getAll()
            if (monstros.length > 0) {
                return res.status(200).json({ message: "Lista de personagens criados:", resource: monstros })
            } else {
                return res.status(200).json({ message: "nenhum monstro foi criado", resource: monstros })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error })
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const monstro = await monstroService.getById(req.params.id)
            if (monstro) {
                return res.status(200).json({ message: "Monstros:", resource: monstro })
            } else {
                return res.status(200).json({ message: "Nenhum monstro foi cadastrado com o id " + req.params.id })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ resource: error })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const novoMonstro = await monstroService.update(id, req.body)
            if (novoMonstro) {
                return res.status(200).json({ message: "Monstro:", resource: novoMonstro })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ resource: error })
        }
    }

    async delete(req: Request, res: Response) {
        try {

            await monstroService.delete(req.params.id)
            res.status(204).json({ message: "Deletado com sucesso" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ resource: error })
        }
    }
}
