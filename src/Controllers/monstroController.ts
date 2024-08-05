import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class monstroController{

    async create(req:Request, res:Response){
        try {
            const prisma = new PrismaClient()

            const {nome, nivelFisico, nivelMental,vida, estresse, historia} = req.body

            const monstro = await prisma.personagem.create({
                data:{
                    nome,
                    nivelFisico,
                    nivelMental,
                    xp:10,
                    vida,
                    estresse,
                    historia
                }
            })

            return res.status(201).json({resource: monstro})
        } catch (error) {
            console.log(error)
            return res.status(500).json({resource:error})
        }
    }
}