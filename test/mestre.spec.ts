import { MestreService } from "../src/Service/MestreService";


const mestreService = new MestreService()



describe("testes jogador", () => {
    it('cria mestre com sucesso', () => {
        const mestre = mestreService.create({ usuario: "dante.email", senha: "123" })
        mestre.then(async infos => {
            const mestre = await mestreService.getById(infos.id)
            expect(mestre).not.toBeNull()
        })
    });

    it('Pega personagem com sucesso', async () => {
        const mestre = await mestreService.getAll()
        expect(mestre).not.toEqual([])
    })

    it('atualiza mestre com sucesso', async() => {
        const mestre = await mestreService.create({ usuario: "dante.email", senha: "123" })
        const mestreAntigo = await mestreService.getById(mestre.id)
        await mestreService.update(mestre.id, { senha: "321" })
        const mestreNovo = await mestreService.getById(mestre.id)
        expect(mestreNovo?.senha).not.toEqual(mestreAntigo?.senha)
            
    })

    it('Deleta mestre com sucesso', async() => {
        const mestre = await mestreService.create({ usuario: "dante.email", senha: "123" })
        await mestreService.delete(mestre.id)
        expect(await mestreService.getById(mestre.id)).toBeNull()
    })
})