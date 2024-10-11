/*
Esse componete é responsavel por pegar a informações do personagem através do seu ID e exibir todos os atributos de monstro no formulario, alem de poder editar esses atributos 
ou então deletar o personagem.
*/
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { personagem } from '../../../Interfaces/personagem.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component, Inject } from '@angular/core';
import { PersonagemService } from '../../../services/personagem.service';
import { Router } from '@angular/router';
import { MonstroService } from '../../../services/monstro.service';

@Component({
  selector: 'app-edit-personagem',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './edit-personagem.component.html',
  styleUrl: './edit-personagem.component.css',
  providers: [PersonagemService, MonstroService]
})
export class EditPersonagemComponent {
  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditPersonagemComponent>,
    @Inject(MAT_DIALOG_DATA) public datapersonagem: { personagem: personagem },
    private personageService: PersonagemService
  ) {
    console.log(datapersonagem, 'L')
    this.formulario = new FormGroup({

      nome: new FormControl(datapersonagem.personagem.nome),
      nivelFisico: new FormControl(datapersonagem.personagem.nivelFisico),
      nivelMental: new FormControl(datapersonagem.personagem.nivelMental),
      historia: new FormControl(datapersonagem.personagem.historia),
      estresse: new FormControl(datapersonagem.personagem.estresse),
      vida: new FormControl(datapersonagem.personagem.vida),
      xp: new FormControl(datapersonagem.personagem.xp)
    });

  }

  async editaPersonagem() {

    await this.personageService.edit(this.datapersonagem.personagem.id, this.formulario)


    this.dialogRef.close()
  }

  async deletaPersonagem() {

    await this.personageService.delete(this.datapersonagem.personagem.id)

    this.dialogRef.close()
  }
}
