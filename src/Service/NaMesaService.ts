import { NaMesaRepository } from '../Repository/NaMesaRepository'
import { JogadoresMesa, MonstroMesa } from '@prisma/client'


const naMesaRepository = new NaMesaRepository()

export class NaMesaService {

    async addJogador(body: any): Promise<JogadoresMesa> {
        const { mesaId, jogadorId } = body;
        const novoJogador = naMesaRepository.addJogador(mesaId, jogadorId );
        return novoJogador;
    }

    async addMonstro(body: any): Promise<MonstroMesa> {
        const { mesaId, monstroId } = body;
        const novoMonstro = naMesaRepository.addMonstro(mesaId, monstroId );
        return novoMonstro;
    }
    /*
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
        habilidadeRepository.delete(id);
    }*/
    
}