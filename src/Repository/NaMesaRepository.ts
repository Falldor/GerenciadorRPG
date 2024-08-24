import { PrismaClient} from "@prisma/client";
import { JogadoresMesa, MonstroMesa } from "@prisma/client";

const prisma = new PrismaClient();

export class NaMesaRepository{
    async addJogador(mesaId:string, jogadorId: string):Promise<JogadoresMesa>{
        const novoJogador = prisma.jogadoresMesa.create({
            data: {
                mesaId,
                jogadorId
            
            }
        })
        
        return novoJogador
    }

    async addMonstro(mesaId:string, monstroId: string):Promise<MonstroMesa>{
        const novoMonstro = prisma.monstroMesa.create({
            data: {
                mesaId,
                monstroId
            
            }
        })
        
        return novoMonstro
    }
    /*
    async getAll() {
        return await prisma.habilidade.findMany()
    }

    async getById(id:string):Promise<habilidade|null>{
        return await prisma.habilidade.findUnique({where: {id}})
    }

    async update(id:string, data: Partial<habilidade>):Promise<habilidade|null>{
        return await prisma.habilidade.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.habilidade.delete({where:{id}})
    }*/
}