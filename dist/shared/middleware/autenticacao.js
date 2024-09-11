"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateTokenMiddleware = void 0;
const JWTService_1 = require("../../Service/JWTService");
const jwtService = new JWTService_1.JWTService;
const authenticateTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers['auth'];
    if (!authHeader) {
        res.status(500).json({ message: "não autenticado" });
    }
    const jwtData = jwtService.verify(authHeader);
    jwtData.then(valor => {
        console.log(valor);
        if (valor === "Chave não encontrada") {
            res.status(500).json({ message: "Erro ao verificar token" });
        }
        else if (valor === "Token_invalido") {
            res.status(500).json({ message: "token invalido" });
        }
        else {
            return next();
        }
    });
};
exports.authenticateTokenMiddleware = authenticateTokenMiddleware;
