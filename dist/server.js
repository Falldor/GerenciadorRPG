"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MestreRoutes_1 = __importDefault(require("./routes/MestreRoutes"));
const MesaRoutes_1 = __importDefault(require("./routes/MesaRoutes"));
const JogadorRoutes_1 = __importDefault(require("./routes/JogadorRoutes"));
const PersonagemRoutes_1 = __importDefault(require("./routes/PersonagemRoutes"));
const MonstroRoutes_1 = __importDefault(require("./routes/MonstroRoutes"));
const HabilidadeRoutes_1 = __importDefault(require("./routes/HabilidadeRoutes"));
//import NaMesaRoutes from './routes/NaMesaRoutes'
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/mestre', MestreRoutes_1.default);
app.use('/mesa', MesaRoutes_1.default);
app.use('/jogador', JogadorRoutes_1.default);
app.use('/personagem', PersonagemRoutes_1.default);
app.use('/monstro', MonstroRoutes_1.default);
app.use('/habilidade', HabilidadeRoutes_1.default);
//app.use('/naMesa', NaMesaRoutes)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
