import { PrismaClient} from "@prisma/client";
import { monstro } from "@prisma/client";

const prisma = new PrismaClient();

export class MonstroRepository{
    async create(nome: string, historia: string):Promise<monstro>{
        const novoPersonagem = prisma.monstro.create({
            data: {
                nome,
                nivelFisico:1,
                nivelMental:1,
                xp:10,
                vida:8,
                estresse:8,
                historia
            }
        })
        
        return novoPersonagem
    }

    async getAll() {
        return await prisma.monstro.findMany()
    }

    async getById(id:string):Promise<monstro|null>{
        return await prisma.monstro.findUnique({where: {id}})
    }

    async update(id:string, data: Partial<monstro>):Promise<monstro|null>{
        return await prisma.monstro.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.monstro.delete({where:{id}})
    }
}