import { PrismaClient, Mestre} from "@prisma/client";

const prisma = new PrismaClient();

export class MestreRepository{
    async create(usuario: string, senha: string):Promise<Mestre>{
        const novoMestre = prisma.mestre.create({
            data: {
                usuario,
                senha
            }
        })
        
        return novoMestre
    }

    async getAll() {
        return await prisma.mestre.findMany()
    }

    async getById(id:string):Promise<Mestre|null>{
        return await prisma.mestre.findUnique({where: {id}})
    }

    async getByEmail(usuario:string):Promise<Mestre|null>{
        return await prisma.mestre.findFirst({where: {usuario}})
    }

    async update(id:string, data: Partial<Mestre>):Promise<Mestre|null>{
        return await prisma.mestre.update({where:{id}, data})
    }

    async delete(id:string){
        return await prisma.mestre.delete({where:{id}})
    }
}