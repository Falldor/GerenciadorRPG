import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class MesaController{

    async create(req:Request, res:Response){
        try {
            const prisma = new PrismaClient()

            const mesa = await prisma.mesa.create({
                data:{}
            })

            return res.status(201).json({resource: mesa})
        } catch (error) {
            console.log(error)
            return res.status(500).json({resource:error})
        }
    }
}