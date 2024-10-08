import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { personagem } from '../../../Interfaces/personagem.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component, Inject } from '@angular/core';
import { PersonagemService } from '../../../services/personagem.service';
import { Router } from '@angular/router';
import { monstro } from '../../../Interfaces/monstro.interface';
import { MonstroService } from '../../../services/monstro.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers:[PersonagemService, MonstroService]
})
export class EditComponent {

  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public datapersonagem: { personagem: personagem },
    @Inject(MAT_DIALOG_DATA) public dataMonstro: { monstro: monstro },
    private personageService: PersonagemService,
    private monstroService: MonstroService,
    private router:Router
  ){
    console.log(datapersonagem)
    if(this.router.url == "personagens"){
      this.formulario = new FormGroup({
      
        nome: new FormControl(datapersonagem.personagem.nome),
        nivelFisico: new FormControl(datapersonagem.personagem.nivelFisico),
        nivelMental: new FormControl(datapersonagem.personagem.nivelMental),
        historia: new FormControl(datapersonagem.personagem.historia),
        estresse: new FormControl(datapersonagem.personagem.estresse),
        vida:new FormControl(datapersonagem.personagem.vida),
        xp: new FormControl(datapersonagem.personagem.xp)
      });
    }else{
      this.formulario = new FormGroup({
      
        nome: new FormControl(dataMonstro.monstro.nome),
        nivelFisico: new FormControl(dataMonstro.monstro.nivelFisico),
        nivelMental: new FormControl(dataMonstro.monstro.nivelMental),
        historia: new FormControl(dataMonstro.monstro.historia),
        estresse: new FormControl(dataMonstro.monstro.estresse),
        vida:new FormControl(dataMonstro.monstro.vida),
        xp: new FormControl(dataMonstro.monstro.xp)
      });
    }
    

    
  }

  async editaPersonagem(){
    if(this.router.url == "personagens"){
      await this.personageService.edit(this.datapersonagem.personagem.id,this.formulario)
    }else{
      console.log(this.dataMonstro.monstro.id)
      await this.monstroService.edit(this.dataMonstro.monstro.id, this.formulario)
    }
    
    this.dialogRef.close()
  }

  async deletaPersonagem(){
    if(this.router.url == "personagens"){
      await this.personageService.delete(this.datapersonagem.personagem.id)
    }else{
      await this.monstroService.delete(this.dataMonstro.monstro.id)
    }
    this.dialogRef.close()
  }
}
