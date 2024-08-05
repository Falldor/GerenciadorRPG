import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class personagemController{

    async create(req:Request, res:Response){
        try {
            const prisma = new PrismaClient()
            
            const {nome, historia} = req.body

            const personagem = await prisma.personagem.create({
                data:{
                    nome,
                    nivelFisico:1,
                    nivelMental:1,
                    xp:10,
                    vida:8,
                    estresse:8,
                    historia
                }
            })

            return res.status(201).json({resource: personagem})
        } catch (error) {
            console.log(error)
            return res.status(500).json({resource:error})
        }
    }
}