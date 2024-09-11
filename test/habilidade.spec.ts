import { HabilidadeService } from "../src/Service/HabilidadeService";
import chai = require("chai");

const habilidadeService = new HabilidadeService()



describe("testes habilidade", () => {
    it('cria habilidade com sucesso', () => {
        const habilidade = habilidadeService.create({nome: "programar", descricao:"sabe programar", tipo: "mental"})
        habilidade.then(infos => {
            const habilidade = habilidadeService.getById(infos.id)
            chai.expect(habilidade).to.have.lengthOf(1)
        })


    });

    it('Pega habilidade com sucesso', () => {
        const habilidade = habilidadeService.getAll()
        chai.expect(habilidade).to.have.lengthOf(1)
    })

    it('atualiza habilidade com sucesso', () => {
        const habilidade = habilidadeService.create({ nome: "scoar", descricao:"sabe socar", tipo: "fisica" })
        habilidade.then(infos => {
            const antigo = habilidadeService.getById(infos.id)
            habilidadeService.update(infos.id, { nome: "socar" })
            const novo = habilidadeService.getById(infos.id)
            chai.expect(antigo).to.not.equal(novo)
        })


    })

    it('Deleta habilidade com sucesso', () => {
        const habilidade = habilidadeService.create({ nome: "imortalidade", descricao:"vira imortal", tipo: "mental"  })
        habilidade.then(infos => {
            habilidadeService.delete(infos.id)
            const habilidade = habilidadeService.getById(infos.id)
            chai.expect(habilidade).to.have.lengthOf(0)
        })
    })
})