import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { JogadorService } from '../Service/JogadorService'
import { JWTService } from '../Service/JWTService';

const jwtService = new JWTService()
const jogadorService = new JogadorService()

export class JogadorController{

    async create(req: Request, res: Response) {
        try {
            return res.status(201).json({message:"Jogador(a) criada com sucesso", resource: await jogadorService.create(req.body)})
        } catch (error) {
           return res.status(500).json({error:error})
        }

    }

    async getAll(req: Request, res:Response){
        try {
            const jogadores = await jogadorService.getAll()
            if(jogadores.length > 0){
                return res.status(200).json({message:"Lista de jogadores cadastradas:", resource:jogadores})
            }else{
                return res.status(200).json({message: "nenhum(a) jogador(a) foi cadastrado(a)", resource: jogadores})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({error :error})
        }
    }

   async getById(req: Request, res: Response){
        try {
            const jogador = await jogadorService.getById(req.params.id)
            if(jogador){
                return res.status(200).json({message: "JOgador(a):", resource: jogador})
            }else{
                return res.status(200).json({message:"Nenhum jogador(a) foi cadastrado com o id " + req.params.id})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

     async update(req: Request, res: Response){
        try {
            const {id} = req.params
            const novoJogador = await jogadorService.update(id, req.body)
            if(novoJogador){
                return res.status(200).json({message: "Mestre:", resource: novoJogador})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async delete(req: Request, res: Response){
        try {
            
            await jogadorService.delete(req.params.id)
            res.status(204).json({message:"Deletada com sucesso"})
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }

    async login(req: Request, res: Response){
        try {
            const {usuario, senha} = req.body
            if(await jogadorService.login(usuario, senha)){
                const token = jwtService.signIn(usuario)
                token.then(valor => {
                    if(valor == "chave_não_encontrada"){
                        res.status(500).json()
                    }else{
                        res.status(200).json({valor})
                    }
                })
            }else{res.status(500).json()}
        } catch (error) {
            console.log(error)
            res.status(500).json({resource:error})
        }
    }
}