/*
Esse componete é responsavel por pegar a informações do monstro através do seu ID e exibir todos os atributos de monstro no formulario, alem de poder editar esses atributos 
ou então deletar o monstro.
*/
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component, Inject } from '@angular/core';
import { PersonagemService } from '../../../services/personagem.service';
import { monstro } from '../../../Interfaces/monstro.interface';
import { MonstroService } from '../../../services/monstro.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [PersonagemService, MonstroService]
})
export class EditComponent {

  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public dataMonstro: { monstro: monstro },
    private monstroService: MonstroService,

  ) {


    console.log(dataMonstro, "T")
    this.formulario = new FormGroup({

      nome: new FormControl(dataMonstro.monstro.nome),
      nivelFisico: new FormControl(dataMonstro.monstro.nivelFisico),
      nivelMental: new FormControl(dataMonstro.monstro.nivelMental),
      historia: new FormControl(dataMonstro.monstro.historia),
      estresse: new FormControl(dataMonstro.monstro.estresse),
      vida: new FormControl(dataMonstro.monstro.vida),
      xp: new FormControl(dataMonstro.monstro.xp)
    });




  }

  async editaMonstro() {

    await this.monstroService.edit(this.dataMonstro.monstro.id, this.formulario)


    this.dialogRef.close()
  }

  async deletaMonstro() {

    await this.monstroService.delete(this.dataMonstro.monstro.id)

    this.dialogRef.close()
  }
}
