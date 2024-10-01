import { jogador } from "@prisma/client";
import { JogadorService } from "../src/Service/JogadorService";
import { PersonagemService } from "../src/Service/PersonagemService";


const personagemService = new PersonagemService()
const jogadorService = new JogadorService()


describe("testes jogador", () => {
    let jogador:jogador
    beforeAll(async () =>{
        jogador = await jogadorService.create({usuario:"fabio.almendro", senha:"123"})
    })
    it('cria personagem com sucesso', async () => {
        const personagem = await personagemService.create(jogador.id,{nome:"pietro", historia:"ele é um assassino"})
        expect(await personagemService.getById(personagem.id)).not.toBeNull()
        
    });

    it('Pega personagem com sucesso', async () => {
        const personagem = await personagemService.getAll(jogador.id)
        expect(personagem).not.toEqual([])
    })

    it('atualiza personagem com sucesso',async () => {
        const personagem = await personagemService.create(jogador.id,{nome:"Tio lu", historia:"brigou com seu pai"})
        const personagemAntigo = await personagemService.getById(personagem.id) 
        await personagemService.update(personagem.id, {historia: "ele é fã da xuxa"})
        const personagemNovo = await personagemService.getById(personagem.id) 
        expect(personagemNovo?.historia).not.toEqual(personagemAntigo?.historia)
        
        
    })

    it('Deleta personagem com sucesso', async() => {
        const personagem = await personagemService.create(jogador.id,{nome:"Romeu", historia:"romeu você está respirando?"})
        await personagemService.delete(personagem.id)
        expect(await personagemService.getById(personagem.id)).toBeNull()
            
        
    })
})