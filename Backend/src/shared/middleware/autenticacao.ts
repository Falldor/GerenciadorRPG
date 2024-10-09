import { NextFunction, Request, Response } from 'express';
import { JWTService } from '../../Service/JWTService';

const jwtService = new JWTService
export const authenticateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = String(req.headers['auth']);
  if(!authHeader){
    res.status(401).json({message: "não autenticado"})
  }
  try {
    const jwtData = jwtService.verify(authHeader);
    jwtData.then(valor => {
      if (valor === "Chave não encontrada" || valor === "Token_invalido"){
          res.status(500).json({message: "Erro ao verificar token"})
      }else{
        return next()
      }
    })
  } catch (error) {
    return res.status(403).json({ message: "Token inválido ou expirado" }); 
  }
};