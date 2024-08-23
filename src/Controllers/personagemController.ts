import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { PersonagemService} from '../Service/PersonagemService'

const personagemService = new PersonagemService()
export class PersonagemController{

    async create(req: Request, res: Response) {
        try {
            return res.status(201).json({message:"Personagem criada com sucesso", resource: await personagemService.create(req.params.jogadorId,req.body)})
        } catch (error) {
           return res.status(500).json({error:error})
        }

    }

    async getAll(req: Request, res:Response){
        try {
            const personagens = await personagemService.getAll(req.params.jogadorId)
            if(personagens.length > 0){
                return res.status(200).json({message:"Lista de personagens criados:", resource:personagens})
            }else{
                return res.status(200).json({message:"nenhum personagem foi criado", resource: personagens})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({error :error})
        }
    }

   async getById(req: Request, res: Response){
        try {
            const personagem = await personagemService.getById(req.params.id)
            if(personagem){
                return res.status(200).json({message: "Personagem:", resource: personagem})
            }else{
                return res.status(200).json({message:"Nenhum personagem foi cadastrado com o id " + req.params.id})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

     async update(req: Request, res: Response){
        try {
            const {id} = req.params
            const novoPersonagem = await personagemService.update(id, req.body)
            if(novoPersonagem){
                return res.status(200).json({message: "Personagem:", resource: novoPersonagem})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async delete(req: Request, res: Response){
        try {
            
            await personagemService.delete(req.params.id)
            res.status(204).json({message:"Deletado com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }
}
