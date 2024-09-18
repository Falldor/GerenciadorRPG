import { JogadorRepository } from '../Repository/JogadorRepository'
import { jogador } from '@prisma/client'


const jogadorRepository = new JogadorRepository()

export class JogadorService {

    async create(body: any): Promise<jogador> {
        const { usuario, senha } = body;
        const jogador = jogadorRepository.create(usuario, senha);
        return jogador;
    }

    async getAll(): Promise<jogador[]>{
        return jogadorRepository.getAll();
    }

    async getById(id:string): Promise<jogador|null>{
        return jogadorRepository.getById(id);
    }

    async update(id:string, data: Partial<jogador>):Promise<jogador|null>{
        return jogadorRepository.update(id, data)
    }

    async delete(id:string): Promise<void>{
        await jogadorRepository.delete(id);
    }
    
}