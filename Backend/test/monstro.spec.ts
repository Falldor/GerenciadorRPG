import { MonstroService } from "../src/Service/MonstroService";

const monstroService = new MonstroService()


describe("testes monstro", () => {
    it('cria monstro com sucesso', async() => {
        const monstro = await monstroService.create({nome:"slime", historia:"é um slime, ele te mata"})
        expect(monstroService.getById(monstro.id)).not.toBeNull()
    });

    it('Pega monstro com sucesso', async() => {
        const monstro = await monstroService.getAll() 
        expect(monstro).not.toEqual([])
    })

    it('atualiza monstro com sucesso', async() => {
        const monstro = await monstroService.create({nome:"demonio", historia:"chamem um padre"})
        const monstroAntiga = await monstroService.getById(monstro.id) 
        await monstroService.update(monstro.id, {historia: "ele é fã da xuxa"})
        const monstroNovo = await monstroService.getById(monstro.id) 
        expect(monstroNovo?.historia).not.toEqual(monstroAntiga?.historia)
        
        
    })

    it('Deleta mosntro com sucesso', async () => {
        const monstro =  await monstroService.create({nome:"errado", historia:"seu destino teve um fim triste"})
        await monstroService.delete(monstro.id)
        expect(await monstroService.getById(monstro.id)).toBeNull()
        
    })
})