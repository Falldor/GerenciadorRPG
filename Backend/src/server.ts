import express from 'express';
import mestreRoutes from './routes/MestreRoutes'
import MesaRoutes from './routes/MesaRoutes'
import JogadorRoutes from './routes/JogadorRoutes'
import PersonagemRoutes from './routes/PersonagemRoutes'
import MonstroRoutes from './routes/MonstroRoutes'
import HabilidadeRoutes from './routes/HabilidadeRoutes'
import { authenticateTokenMiddleware } from './shared/middleware/autenticacao';

const app = express();
const port = 3000;

app.use(express.json())

app.use('/mestre',mestreRoutes)
app.use('/mesa', authenticateTokenMiddleware, MesaRoutes)
app.use('/jogador', JogadorRoutes)
app.use('/personagem', authenticateTokenMiddleware, PersonagemRoutes)
app.use('/monstro', authenticateTokenMiddleware,MonstroRoutes)
app.use('/habilidade', authenticateTokenMiddleware, HabilidadeRoutes)
//app.use('/naMesa', NaMesaRoutes)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})