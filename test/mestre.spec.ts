import { MestreService } from "../src/Service/MestreService";
import chai = require("chai");

const mestreService = new MestreService()



describe("testes jogador", () => {
    it('cria mestre com sucesso', () => {
        const mestre = mestreService.create({ usario: "dante.email", senha: "123" })
        mestre.then(infos => {
            const mestre = mestreService.getById(infos.id)
            chai.expect(mestre).to.have.lengthOf(1)
        })


    });

    it('Pega personagem com sucesso', () => {
        const mestre = mestreService.getAll()
        chai.expect(mestre).to.have.lengthOf(1)
    })

    it('atualiza mestre com sucesso', () => {
        const mestre = mestreService.create({ usario: "dante.email", senha: "123" })
        mestre.then(infos => {
            const mestreAntigo = mestreService.getById(infos.id)
            mestreService.update(infos.id, { senha: "321" })
            const mestreNovo = mestreService.getById(infos.id)
            chai.expect(mestreNovo).to.not.equal(mestreAntigo)
        })


    })

    it('Deleta mestre com sucesso', () => {
        const mestre = mestreService.create({ usario: "dante.email", senha: "123" })
        mestre.then(infos => {
            mestreService.delete(infos.id)
            const mestre = mestreService.getById(infos.id)
            chai.expect(mestre).to.have.lengthOf(0)
        })
    })
})