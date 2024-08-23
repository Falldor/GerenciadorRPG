import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export class MestreRepository{
    async create(usuario: string, senha: string){
        return await prisma.mestre.create({
            data: {
                usuario,
                senha
            }
        })
    }

    async getAll() {
        return await prisma.mestre.findMany()
    }

    async getById(id:string){
        return await prisma.mestre.findUnique({where: id})
    }

    async update(id:string, senha: string){
        return await prisma.mestre.update({where:id, senha})
    }

    async delete(id:string){
        return await prisma.mestre.delete({where:id})
    }
}