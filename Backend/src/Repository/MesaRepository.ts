import { PrismaClient} from "@prisma/client";
import { Mesa } from "@prisma/client";

const prisma = new PrismaClient();

export class MesaRepository{
    async create(mestreId:string ):Promise<Mesa>{
        const novoMestre = prisma.mesa.create({
            data: {
                mestreId
            }
        })
        
        return novoMestre
    }

    async getAll(mestreId:string) {
        return await prisma.mesa.findMany({where:{mestreId}})
    }

    async getById(id:string):Promise<Mesa|null>{
        return await prisma.mesa.findUnique({where: {id}})
    }

    async update(id:string, data: Partial<Mesa>):Promise<Mesa|null>{
        return await prisma.mesa.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.mesa.delete({where:{id}})
    }
}