import { Mestre } from "@prisma/client";
import { MestreService } from "../src/Service/MestreService";
import { MesaService } from "../src/Service/MesaService";
import chai = require("chai");

const mesaService = new MesaService()
const mestreService = new MestreService()


describe("testes mestre", () => {
    let mestre:Promise<Mestre>
    before(async () =>{
        mestre = mestreService.create({usario:"fabio.almendro", senha:"123"})
    })
    it('cria mesa com sucesso', () => {
        mestre.then(mestre => {
            mesaService.create(mestre.id)
            const mesa = mesaService.getAll(mestre.id)
            chai.expect(mesa).to.have.lengthOf(1)
        })
        
    });

    it('Pega mesa com sucesso', () => {
        mestre.then(mestre => {
            const mesa = mesaService.getAll(mestre.id)
            chai.expect(mesa).to.have.lengthOf(1)
        })
    })

    it('Deleta mesa com sucesso', () => {
        mestre.then(mestre => {
            const mesa = mesaService.create(mestre.id)
            mesa.then(mesa => {
            mesaService.delete(mesa.id)
            const mesas = mesaService.getById(mesa.id)
            chai.expect(mesas).to.have.lengthOf(0)
        })
        })
        
    })
})