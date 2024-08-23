import { MonstroRepository } from '../Repository/MonstroRepository'
import { monstro } from '@prisma/client'


const monstroRepository = new MonstroRepository()

export class MonstroService {

    async create(body: any): Promise<monstro> {
        const { nome, historia } = body;
        const personagem = monstroRepository.create(nome, historia);
        return personagem;
    }

    async getAll(): Promise<monstro[]>{
        return monstroRepository.getAll();
    }

    async getById(id:string): Promise<monstro|null>{
        return monstroRepository.getById(id);
    }

    async update(id:string, data: Partial<monstro>):Promise<monstro|null>{
        return monstroRepository.update(id, data)
    }

    async delete(id:string): Promise<void>{
        monstroRepository.delete(id);
    }
    
}