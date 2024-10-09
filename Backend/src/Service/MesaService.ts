import { MesaRepository } from '../Repository/MesaRepository'
import { Mesa } from '@prisma/client'


const mesaRepository = new MesaRepository()

export class MesaService {

    async create(mestreId: string): Promise<Mesa> {
        const mesa = mesaRepository.create(mestreId);
        return mesa;
    }

    async addMonstro(mesaId: string, monstroId: Partial<Mesa>){
        const mesa = mesaRepository.addMonstro(mesaId, monstroId)
        return mesa
    }

    async addPersonagem(mesaId: string, personagemId: Partial<Mesa>){
        const mesa = mesaRepository.addPersonagem(mesaId, personagemId)
        return mesa
    }

    async getAll(mestreId:string): Promise<Mesa[]>{
        return mesaRepository.getAll(mestreId);
    }

    async getById(id:string): Promise<Mesa|null>{
        return mesaRepository.getById(id);
    }

    async update(id:string, data: Partial<Mesa>):Promise<Mesa|null>{
        return mesaRepository.update(id, data)
    }

    async delete(id:string): Promise<void>{
       await mesaRepository.delete(id);
    }
    
}