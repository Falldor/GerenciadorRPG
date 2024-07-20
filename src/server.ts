import express , {Request, Response} from 'express';

const app = express();
const port = 3000;

app.use(express.json())

class Player{
    id:number;
    nome: string;
    nivelFisico;
    nivelMental;
    xp: number;

    constructor(id:number,nome:string){
        this.id = id
        this.nome = nome
        this.nivelFisico = 1
        this.nivelMental = 1
        this.xp = 0
    }

}

let players:Player[] = []


app.post('/createPlayer', (req, res) => {
    try{
        const player = new Player(req.body.id, req.body.nome)
        players.push(player)
        res.status(201).json({message:'Player criado com sucesso', resource: player})
    }catch(error){
        res.status(500).json({message:`não foi possivel criar player pois o servidor deu erro:${error}`})
    }
    
})
app.get('/getPlayers', (req, res) => {
    try {
        res.status(200).json({message:'lista de players cadastrados', resourcer: players})
    } catch (error) {
        res.status(500).json({message:`não foi possivel retornar os players pois o servidor deu erro:${error}`})        
    }
});
app.put('/editPlayer/:id',(req, res) => {
    try {
        let find = false
        for(let i = 0; i < players.length; i++){
            if(players[i].id == parseInt(req.params.id)){
                players[i].nome = req.body.nome
                players[i].xp = req.body.xp
                find = true
                res.status(200).json({message:'lista de players cadastrados', resourcer: players[i]})
            }   
        }
        if(!find){
            res.status(400).send(`Não existe nenhum player com id: ${req.params.id}`)
        }
    } catch (error) {
        res.status(500).json({message:`não foi possivel retornar o player pois o servidor deu erro:${error}`})
    }
})
app.delete('/deletePlayer/:id',(req, res) => {
    try {
        let listPlayersAux: Player[] = []
        let find = false
        for(let i = 0; i < players.length; i++){
            if(players[i].id != parseInt(req.params.id)){
                listPlayersAux.push(players[i])
                find = true
            }else{
                find = true
                
            }
        }
        players = listPlayersAux
        if(!find){
            res.status(400).send(`Não existe nenhum player com id: ${req.params.id}`)
        }else{
            res.status(204)
        }
    } catch (error) {
        res.status(500).json({message:`não foi possivel deletar o player pois o servidor deu erro:${error}`})
    }
})



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})