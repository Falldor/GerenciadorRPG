
import { PersonagemService } from '../../services/personagem.service';
import { personagem } from '../../Interfaces/personagem.interface';
import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Component, OnInit, HostListener  } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { monstro } from '../../Interfaces/monstro.interface';
import { MonstroService } from '../../services/monstro.service';
import { _getEventTarget } from '@angular/cdk/platform';
import { MatTableModule } from '@angular/material/table';
import { MesaService } from '../../services/mesa.service';
import { mesa } from '../../Interfaces/mesa.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, MatTableModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [PersonagemService, MonstroService, MesaService]
})
export class HomeComponent implements OnInit{

  menu = false
  monstroMenu = false
  menuPos = {x:0 , y:0}
  personagemMenu = false
  
  
  miniaturas: any[] = []
  miniaturasMonstros:monstro[] = []
  miniaturasPersonagens: personagem[] = []
  displayedColumns:string[] = ['nome', 'nivelFisico', 'nivelMental']
    
  
  monstros: monstro[] = []
  personagens: personagem[] = []
  mesaId = "e782854c-7366-46cd-a3e2-6fad99b60396"
  mesa: mesa = {idMesa:"",mestreId:"", PersonagensId: [], MonstrosId: []}


  
  constructor(
    private personagemService: PersonagemService,
    private monstroService: MonstroService,
    private mesaService: MesaService
  ){ }
  

  async ngOnInit(): Promise<void> {
    this.mesa = await this.getMesaById(this.mesaId)
    this.personagens = await this.getAllPersonagens();
    this.monstros = await this.getAllMonstros()
    this.miniaturasPersonagens = await this.BuscaPersonagens(this.mesa.PersonagensId)
    this.miniaturasMonstros = await this.BuscaMonstros(this.mesa.MonstrosId)
    this.miniaturas = [...this.miniaturasMonstros, ...this.miniaturasPersonagens]
    
  }

  async getAllPersonagens() {
    return await firstValueFrom(this.personagemService.getAllPersonagens());
  }

  async getAllMonstros() {
    return await firstValueFrom(this.monstroService.getAll());
  }

  async getMesaById(mesaId:string){
    return await firstValueFrom(this.mesaService.getMesaByid(mesaId))
  }
  
  async BuscaMonstros(idMonstros:String[]){
    const monstros = []
    let monstroEncontrado
    for(let i = 0; i< idMonstros.length;i++){
      monstroEncontrado = this.monstros.find(monstro => monstro.id == idMonstros[i])
      if(monstroEncontrado){
        monstros.push(monstroEncontrado)
      }
    }
    console.log(monstros)
    return monstros
  }

  async BuscaPersonagens(idPersonagens:String[]){
    const personagens:personagem[] = []
    let personagemEncontrado
    for(let i = 0; i< idPersonagens.length;i++){
      personagemEncontrado = this.personagens.find(personagem => personagem.id == idPersonagens[i])
      if(personagemEncontrado){
        personagens.push(personagemEncontrado)
      }
    }
    return personagens
  }


  onClick(event: MouseEvent){
    const target = event.target as HTMLElement
    if(this.monstroMenu == false && this.personagemMenu == false && target.tagName != "LI" && this.menu == false){
      this.menu = true
      this.menuPos = {x:event.clientX, y: event.clientY}
    }else{
      if(target.tagName == "BODY"){
        this.menu = false
      }
    }
    console.log(this.miniaturas)
  }

  escolherOpcao(opcao: string){
    this.menu = false
    if(opcao == "monstro"){
      this.monstroMenu = true
    }else{
      this.personagemMenu = true
    }

  }

  get(minuatura: personagem | monstro){
    this.miniaturas = [...this.miniaturas, minuatura]
    if(this.personagemMenu == true){
      this.personagemMenu = false
      this.mesaService.addPersonagem(this.mesaId, [minuatura.id])
    }else{
      this.monstroMenu = false
      this.mesaService.addMonstro(this.mesaId,[ minuatura.id])

    }
    this.menu = false
    
  }

  
  
}
