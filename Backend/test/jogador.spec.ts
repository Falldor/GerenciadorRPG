import { JogadorService } from "../src/Service/JogadorService";

const jogadorService = new JogadorService()



describe("testes jogador", () => {
    it('cria jogador com sucesso', () => {
        const jogador = jogadorService.create({ usuario: "dante.email", senha: "123" })
        jogador.then(async infos => {
            const jogador = await jogadorService.getById(infos.id)
            expect(jogador).not.toBeNull()
        })


    });

    it('Pega personagem com sucesso', () => {
        const jogador = jogadorService.getAll()
        expect(jogador).not.toEqual([])
    })

    it('atualiza jogador com sucesso', async () => {
        const jogador = await jogadorService.create({ usuario: "dante.email", senha: "123" })
        const antigo = await jogadorService.getById(jogador.id)
        await jogadorService.update(jogador.id, { senha: "321" })
        const novo = await jogadorService.getById(jogador.id)
        expect(antigo?.senha).not.toEqual(novo?.senha)

    })

    it('Deleta jogador com sucesso',async () => {
        const jogador = await jogadorService.create({ usuario: "dante.email", senha: "123" })
        await jogadorService.delete(jogador.id)
        expect(await jogadorService.getById(jogador.id)).toBeNull()
       
            
        
    })
})