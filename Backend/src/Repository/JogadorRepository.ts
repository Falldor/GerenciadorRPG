import { PrismaClient} from "@prisma/client";
import { jogador } from "@prisma/client";

const prisma = new PrismaClient();

export class JogadorRepository{
    async create(usuario: string, senha: string):Promise<jogador>{
        const novoJogador = prisma.jogador.create({
            data: {
                usuario,
                senha
            }
        })
        
        return novoJogador
    }

    async getAll() {
        return await prisma.jogador.findMany()
    }

    async getById(id:string):Promise<jogador|null>{
        return await prisma.jogador.findUnique({where: {id}})
    }

    async update(id:string, data: Partial<jogador>):Promise<jogador|null>{
        return await prisma.jogador.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.jogador.delete({where:{id}})
    }
}