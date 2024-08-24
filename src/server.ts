import express from 'express';
import mestreRoutes from './routes/MestreRoutes'
import MesaRoutes from './routes/MesaRoutes'
import JogadorRoutes from './routes/JogadorRoutes'
import PersonagemRoutes from './routes/PersonagemRoutes'
import MonstroRoutes from './routes/MonstroRoutes'
import HabilidadeRoutes from './routes/HabilidadeRoutes'
//import NaMesaRoutes from './routes/NaMesaRoutes'

const app = express();
const port = 3000;

app.use(express.json())

app.use('/mestre', mestreRoutes)
app.use('/mesa', MesaRoutes)
app.use('/jogador', JogadorRoutes)
app.use('/personagem', PersonagemRoutes)
app.use('/monstro', MonstroRoutes)
app.use('/habilidade', HabilidadeRoutes)
//app.use('/naMesa', NaMesaRoutes)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})