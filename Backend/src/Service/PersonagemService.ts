import { PersonagemRepository } from '../Repository/PersonagemRepository'
import { personagem } from '@prisma/client'


const personagemRepository = new PersonagemRepository()

export class PersonagemService {

    async create(JogadorId:string, body: any): Promise<personagem> {
        const { nome, historia } = body;
        const personagem = personagemRepository.create(JogadorId,nome, historia);
        return personagem;
    }

    async getAllPersonagensIdJogador(JogadorId:string): Promise<personagem[]>{
        return personagemRepository.getAllPersonagensIdJogador(JogadorId);
    }

    async getAllPersonagens(): Promise<personagem[]>{
        return personagemRepository.getAllPersonagens();
    }

    async getById(id:string): Promise<personagem|null>{
        return personagemRepository.getById(id);
    }

    async update(id:string, data: Partial<personagem>):Promise<personagem|null>{
        return personagemRepository.update(id, data)
    }

    async delete(id:string): Promise<void>{
        await personagemRepository.delete(id);
    }
    
}