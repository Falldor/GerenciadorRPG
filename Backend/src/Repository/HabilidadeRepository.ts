import { PrismaClient} from "@prisma/client";
import { habilidade, tipoHabilidade } from "@prisma/client";

const prisma = new PrismaClient();

export class HabilidadeRepository{
    async create(nome: string, descricao: string, tipo:tipoHabilidade):Promise<habilidade>{
        const novoPersonagem = prisma.habilidade.create({
            data: {
                nome,
                descricao,
                tipo
            }
        })
        
        return novoPersonagem
    }

    async getAll() {
        return await prisma.habilidade.findMany()
    }

    async getAllTipo(tipo:tipoHabilidade) {
        return await prisma.habilidade.findMany({where:{tipo}})
    }


    async getById(id:string):Promise<habilidade|null>{
        return await prisma.habilidade.findUnique({where: {id}})
    }

    async update(id:string, data: Partial<habilidade>):Promise<habilidade|null>{
        return await prisma.habilidade.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.habilidade.delete({where:{id}})
    }
}