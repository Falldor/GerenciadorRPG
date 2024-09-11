import { NextFunction, Request, Response } from 'express';
import { JWTService } from '../../Service/JWTService';

const jwtService = new JWTService
export const authenticateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['auth'];

  if(!authHeader){
    res.status(500).json({message: "não autenticado"})
  }
  
  const jwtData = jwtService.verify(authHeader);
  jwtData.then(valor => {
    console.log(valor)
    if (valor === "Chave não encontrada"){
        res.status(500).json({message: "Erro ao verificar token"})
    }
    else if(valor === "Token_invalido"){
        res.status(500).json({message: "token invalido"})
    }else{
        return next()
    }
  })

};