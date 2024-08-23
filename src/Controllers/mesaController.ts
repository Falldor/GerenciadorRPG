import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { MesaService } from '../Service/MesaService'

const mesaService = new MesaService()

export class MesaController{

    async create(req: Request, res: Response) {
        try {
            return res.status(201).json({message:"mesa criada com sucesso", resource: await mesaService.create(req.body)})
        } catch (error) {
           return res.status(500).json({error:error})
        }

    }

    async getAll(req: Request, res:Response){
        try {
            const {mestreId} = req.params
            const mesas = await mesaService.getAll(mestreId)
            if(mesas.length > 0){
                return res.status(200).json({message:"Lista de mesa cadastradas:", resource:mesas})
            }else{
                return res.status(200).json({message: "nenhuma mesa foi cadastrada", resource: mesas})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({error :error})
        }
    }

   async getById(req: Request, res: Response){
        try {
            const mesa = await mesaService.getById(req.params.idMesa)
            if(mesa){
                return res.status(200).json({message: "Mestre:", resource: mesa})
            }else{
                return res.status(200).json({message:"Nenhuma mesa foi cadastrado com o id " + req.params.id})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

     async update(req: Request, res: Response){
        try {
            const {id} = req.params
            const novaMesa = await mesaService.update(id, req.body)
            if(novaMesa){
                return res.status(200).json({message: "Mestre:", resource: novaMesa})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async delete(req: Request, res: Response){
        try {
            
            await mesaService.delete(req.params.idMesa)
            res.status(204).json({message:"Deletada com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }
}