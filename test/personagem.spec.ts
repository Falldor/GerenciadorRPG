import { jogador } from "@prisma/client";
import { JogadorService } from "../src/Service/JogadorService";
import { PersonagemService } from "../src/Service/PersonagemService";
import chai = require("chai");

const personagemService = new PersonagemService()
const jogadorService = new JogadorService()


describe("testes jogador", () => {
    let jogador:Promise<jogador>
    before(async () =>{
        jogador = jogadorService.create({usario:"fabio.almendro", senha:"123"})
    })
    it('cria personagem com sucesso', () => {
        jogador.then(jogador => {
            personagemService.create(jogador.id,{nome:"pietro", hisotira:"ele é um assassino"})
            const personagem = personagemService.getAll(jogador.id)
            chai.expect(personagem).to.have.lengthOf(1)
        })
        
    });

    it('Pega personagem com sucesso', () => {
        jogador.then(jogador => {
            const personagem = personagemService.getAll(jogador.id)
            chai.expect(personagem).to.have.lengthOf(1)
        })
    })

    it('atualiza personagem com sucesso', () => {
        jogador.then(jogador => {
            const personagem = personagemService.create(jogador.id,{nome:"Tio lu", hisotira:"brigou com seu pai"})
            personagem.then(personagem => {
            const personagemAntigo = personagemService.getById(personagem.id) 
            personagemService.update(personagem.id, {historia: "ele é fã da xuxa"})
            const personagemNovo = personagemService.getById(personagem.id) 
            chai.expect(personagemNovo).to.not.equal(personagemAntigo)
        })
        })
        
        
    })

    it('Deleta personagem com sucesso', () => {
        jogador.then(jogador => {
            const personagem = personagemService.create(jogador.id,{nome:"Romeu", hisotira:"romeu você está respirando?"})
            personagem.then(personagem => {
            personagemService.delete(personagem.id)
            const personagens = personagemService.getAll(jogador.id)
            chai.expect(personagem).to.have.lengthOf(0)
        })
        })
        
    })
})