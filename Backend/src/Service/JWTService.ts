import * as jwt from 'jsonwebtoken'

interface IJwtData {
    uid:number
}

export class JWTService {
    async signIn(data: IJwtData){
        if(!process.env.JWT_SECRET) return "Chave_não_encontrada";

        return jwt.sign(data,process.env.JWT_SECRET);
    }

    async verify(token: string) {
        if(!process.env.JWT_SECRET) return "Chave não encontrada";
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            
            
            return decoded as IJwtData
        } catch (error) {
            return 'Token_invalido'
        }
        
    }
}