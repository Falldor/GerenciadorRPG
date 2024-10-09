import { MestreRepository } from '../Repository/MestreRepository'
import { Mestre } from '@prisma/client'


const mestreRepository = new MestreRepository()

export class MestreService {

    async create(body: any): Promise<Mestre> {
        const { usuario, senha } = body;
        const mestre = mestreRepository.create(usuario, senha);
        return mestre;
    }

    async getAll(): Promise<Mestre[]>{
        return mestreRepository.getAll();
    }

    async getById(id:string): Promise<Mestre|null>{
        return mestreRepository.getById(id);
    }

    async geByEmail(email:string){
        return mestreRepository.getByEmail(email)
    }

    async update(id:string, data: Partial<Mestre>):Promise<Mestre|null>{
        return mestreRepository.update(id, data)
    }

    async delete(id:string): Promise<void>{
        await mestreRepository.delete(id);
    }

    async login(usuario: string, senha:string){
        const mestre = await this.geByEmail(usuario)
        if(mestre?.senha == senha && mestre.usuario == usuario){
            
            return true
        }
        else return false
    }
    
}