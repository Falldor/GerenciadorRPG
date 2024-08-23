import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class HabilidadeController{

    async create(req:Request, res:Response){
        try {
            const prisma = new PrismaClient()

            const {nome, descricao, tipo} = req.body

            const habilidade = await prisma.habilidade.create({
                data: {
                    nome,
                    descricao,
                    tipo
                }
            })

            return res.status(201).json({resource: habilidade})
        } catch (error) {
            console.log(error)
            return res.status(500).json({resource:error})
        }
    }
}