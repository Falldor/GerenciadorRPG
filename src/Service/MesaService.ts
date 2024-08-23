import { MesaRepository } from '../Repository/MesaRepository'
import { Mesa } from '@prisma/client'


const mesaRepository = new MesaRepository()

export class MesaService {

    async create(body: any): Promise<Mesa> {
        const { mestreId } = body;
        const mesa = mesaRepository.create(mestreId);
        return mesa;
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
        mesaRepository.delete(id);
    }
    
}