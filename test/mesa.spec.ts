import { Mestre } from "@prisma/client";
import { MestreService } from "../src/Service/MestreService";
import { MesaService } from "../src/Service/MesaService";

const mesaService = new MesaService()
const mestreService = new MestreService()


describe("testes mestre", () => {
    let mestre : Mestre
    beforeAll(async () =>{
        mestre = await mestreService.create({usuario:"fabio.almendro", senha:"123"})
    })
    it('cria mesa com sucesso', async () => {
        await mesaService.create(mestre.id)
        const mesa = await mesaService.getAll(mestre.id)
        expect(mesa).not.toBeNull()
        
    });

    it('Pega mesa com sucesso', async () => {
        const mesa = await mesaService.getAll(mestre.id)
        expect(mesa).not.toEqual([])
    })

    it('Deleta mesa com sucesso', async () => {
        const mesa = await mesaService.create(mestre.id)
        await mesaService.delete(mesa.id)
        expect(await mesaService.getById(mesa.id)).toBeNull()     
    })
})