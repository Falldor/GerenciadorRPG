import express , {Request, Response} from 'express';
import { mestreController } from './Controllers/mestreController';
import { jogadorController } from './Controllers/jogadorController';
import { personagemController } from './Controllers/personagemController';
import { monstroController } from './Controllers/monstroController';
import { habilidadeController } from './Controllers/habilidade.Controller';
import { mesaController } from './Controllers/mesaController';

const app = express();
const port = 3000;

app.use(express.json())

const mestreControl = new mestreController()
const jogadorControl = new jogadorController()
const personagemControl = new personagemController()
const monstroControl = new monstroController()
const habilidadeControl = new habilidadeController()
const mesaControl = new mesaController()


app.post('/mestre/create', mestreControl.create)
app.get('/mestre/getAll', mestreControl.getAll)

app.post('/jogador/create', jogadorControl.create)

app.post('/mesa/create', mesaControl.create)

app.post('/personagem/create', personagemControl.create)

app.post('/monstro/create', monstroControl.create)

app.post('/habilidade/create', habilidadeControl.create)





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})