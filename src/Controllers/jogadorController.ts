import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class JogadorController{

    async create(req:Request, res:Response){
        try {
            const { usuario, senha } = req.body
            const prisma = new PrismaClient()

            const jogador = await prisma.jogador.create({
                data: {
                    usuario,
                    senha
                }
            })

            return res.status(201).json(jogador)
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }
}