import { HabilidadeService } from "../src/Service/HabilidadeService";
import { tipoHabilidade } from "@prisma/client";

const habilidadeService = new HabilidadeService()

describe("testes habilidade", () => {
    it('cria habilidade com sucesso', async() => {
      const habilidade = habilidadeService.create({ nome: "programar", descricao: "sabe programar", tipo: tipoHabilidade.mental })
      habilidade.then(async infos => {
        const habilidade = await habilidadeService.getById(infos.id)
        expect(habilidade).not.toBeNull()
      })
    })
    it('Pega habilidade com sucesso', () => {
      const habilidade = habilidadeService.getAll()
      expect(habilidade).not.toEqual([])      
    })

    it('atualiza habilidade com sucesso',async () => {
      const habilidade = await habilidadeService.create({ nome: "scoar", descricao: "sabe socar", tipo: tipoHabilidade.fisico })
      const antigo = await habilidadeService.getById(habilidade.id)
      await habilidadeService.update(habilidade.id, { nome: "socar" })
      const novo = await habilidadeService.getById(habilidade.id)
      expect(antigo?.nome).not.toEqual(novo?.nome)
    })

    it('Deleta habilidade com sucesso', async () => {
      const habilidade = await habilidadeService.create({ nome: "imortalidade", descricao: "vira imortal", tipo: tipoHabilidade.mental })
      await habilidadeService.delete(habilidade.id)
      expect(await habilidadeService.getById(habilidade.id)).toBeNull()
    })
});