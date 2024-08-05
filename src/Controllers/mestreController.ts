import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class mestreController {



    async create(req: Request, res: Response) {
        try {
            const { usuario, senha } = req.body
            const prisma = new PrismaClient()

            const mestre = await prisma.mestre.create({
                data: {
                    usuario,
                    senha
                }
            })

            return res.json(mestre)
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }

    }

    async getAll(req: Request, res:Response){
        try {
            const prisma = new PrismaClient()

            const mestres = await prisma.mestre.findMany()
            
            return res.status(200).json({message:"Lista de mestres cadastrados:", resource:mestres})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }


}