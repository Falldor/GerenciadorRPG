import { Request, Response } from 'express'
import { MestreService } from '../Service/MestreService'

const mestreService = new MestreService();


export class MestreController {



    async create(req: Request, res: Response) {
        try {
            return res.status(201).json({message:"mestre criado com sucesso", resource: await mestreService.create(req.body)})
        } catch (error) {
           return res.status(500).json({error:error})
        }

    }

    async getAll(req: Request, res:Response){
        try {
            const mestres = await mestreService.getAll()
            if(mestres.length > 0){
                return res.status(200).json({message:"Lista de mestres cadastrados:", resource:mestres})
            }else{
                return res.status(200).json({message: "nenhum mestre foi cadastrado", resource: mestres})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({error :error})
        }
    }

   async getById(req: Request, res: Response){
        try {
            const mestre = await mestreService.getById(req.params.id)
            if(mestre){
                return res.status(200).json({message: "Mestre:", resource: mestre})
            }else{
                return res.status(200).json({message:"Nenhum mestre foi cadastrado com o id " + req.params.id})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

     async update(req: Request, res: Response){
        try {
            const {id} = req.params
            const novoMestre = await mestreService.update(id, req.body)
            if(novoMestre){
                return res.status(200).json({message: "Mestre:", resource: novoMestre})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async delete(req: Request, res: Response){
        try {
            
            await mestreService.delete(req.params.id)
            res.status(204).json({message:"Deletado com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }


}