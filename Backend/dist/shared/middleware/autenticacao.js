"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateTokenMiddleware = void 0;
const JWTService_1 = require("../../Service/JWTService");
const jwtService = new JWTService_1.JWTService;
const authenticateTokenMiddleware = (req, res, next) => {
    const authHeader = String(req.headers['auth']);
    if (!authHeader) {
        res.status(401).json({ message: "não autenticado" });
    }
    try {
        const jwtData = jwtService.verify(authHeader);
        jwtData.then(valor => {
            console.log(valor);
            if (valor === "Chave não encontrada") {
                res.status(500).json({ message: "Erro ao verificar token" });
            }
            else {
                return next();
            }
        });
    }
    catch (error) {
        return res.status(403).json({ message: "Token inválido ou expirado" });
    }
};
exports.authenticateTokenMiddleware = authenticateTokenMiddleware;
