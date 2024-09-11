import { JogadorService } from "../src/Service/JogadorService";
import chai = require("chai");

const jogadorService = new JogadorService()



describe("testes jogador", () => {
    it('cria jogador com sucesso', () => {
        const jogador = jogadorService.create({ usario: "dante.email", senha: "123" })
        jogador.then(infos => {
            const jogador = jogadorService.getById(infos.id)
            chai.expect(jogador).to.have.lengthOf(1)
        })


    });

    it('Pega personagem com sucesso', () => {
        const jogador = jogadorService.getAll()
        chai.expect(jogador).to.have.lengthOf(1)
    })

    it('atualiza jogador com sucesso', () => {
        const jogador = jogadorService.create({ usario: "dante.email", senha: "123" })
        jogador.then(infos => {
            const antigo = jogadorService.getById(infos.id)
            jogadorService.update(infos.id, { senha: "321" })
            const novo = jogadorService.getById(infos.id)
            chai.expect(antigo).to.not.equal(novo)
        })


    })

    it('Deleta jogador com sucesso', () => {
        const jogador = jogadorService.create({ usario: "dante.email", senha: "123" })
        jogador.then(infos => {
            jogadorService.delete(infos.id)
            const jogador = jogadorService.getById(infos.id)
            chai.expect(jogador).to.have.lengthOf(0)
        })
    })
})