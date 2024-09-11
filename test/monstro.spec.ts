import { MonstroService } from "../src/Service/MonstroService";
import chai = require("chai");

const monstroService = new MonstroService()


describe("testes monstro", () => {
    it('cria monstro com sucesso', () => {
        monstroService.create({nome:"slime", hisotira:"é um slime, ele te mata"})
        const monstro = monstroService.getAll() 
        chai.expect(monstro).to.have.lengthOf(1)
    });

    it('Pega monstro com sucesso', () => {
        const monstro = monstroService.getAll() 
        chai.expect(monstro).to.have.lengthOf(1)
    })

    it('atualiza monstro com sucesso', () => {
        const monstro = monstroService.create({nome:"demonio", hisotira:"chamem um padre"})
        monstro.then(monstro => {
            const monstroAntiga = monstroService.getById(monstro.id) 
            monstroService.update(monstro.id, {historia: "ele é fã da xuxa"})
            const monstroNovo = monstroService.getById(monstro.id) 
            chai.expect(monstroNovo).to.not.equal(monstroAntiga)
        })
        
    })

    it('Deleta mosntro com sucesso', () => {
        const monstro = monstroService.create({nome:"errado", hisotira:"seu destino teve um fim triste"})
        monstro.then(monstro => {
            monstroService.delete(monstro.id)
            const monstroMorto = monstroService.getById(monstro.id) 
            chai.expect(monstroMorto).to.have.lengthOf(0)
        })
        
    })
})