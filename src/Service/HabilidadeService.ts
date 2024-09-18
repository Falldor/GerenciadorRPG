import { HabilidadeRepository } from '../Repository/HabilidadeRepository'
import { habilidade } from '@prisma/client'


const habilidadeRepository = new HabilidadeRepository()

export class HabilidadeService {

    async create(body: any): Promise<habilidade> {
        const { nome, descricao, tipo } = body;
        const habilidade = habilidadeRepository.create(nome, descricao, tipo);
        return habilidade;
    }

    async getAll(): Promise<habilidade[]>{
        return habilidadeRepository.getAll();
    }

    async getById(id:string): Promise<habilidade|null>{
        return habilidadeRepository.getById(id);
    }

    async update(id:string, data: Partial<habilidade>):Promise<habilidade|null>{
        return habilidadeRepository.update(id, data)
    }

    async delete(id:string): Promise<void>{
        await habilidadeRepository.delete(id);
    }
    
}