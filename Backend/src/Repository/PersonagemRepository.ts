import { PrismaClient} from "@prisma/client";
import { personagem } from "@prisma/client";

const prisma = new PrismaClient();

export class PersonagemRepository{
    async create(jogadorId: string,nome: string, historia: string):Promise<personagem>{
        const novoPersonagem = prisma.personagem.create({
            data: {
                jogadorId,
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

    async getAllPersonagensIdJogador(jogadorId:string) {
        return await prisma.personagem.findMany({where:{jogadorId}})
    }

    async getAllPersonagens() {
        return await prisma.personagem.findMany()
    }

    async getById(id:string):Promise<personagem|null>{
        return await prisma.personagem.findUnique({where: {id}})
    }

    async update(id:string, data: Partial<personagem>):Promise<personagem|null>{
        return await prisma.personagem.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.personagem.delete({where:{id}})
    }
}