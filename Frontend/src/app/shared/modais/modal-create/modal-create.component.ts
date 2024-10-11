/*
Esse componete é responsavel por receber a informações do personagem ou monstro já que ambos tem praticamente os mesmos atributos atraves do formulario e fazer a requisição para
salvar ele(a).
*/
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PersonagemService } from '../../../services/personagem.service';
import { habilidade } from '../../../Interfaces/habilidade.interface';
import { MonstroService } from '../../../services/monstro.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component,inject ,Inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgIf,NgFor } from '@angular/common';
import { Router } from '@angular/router';





@Component({
  selector: 'app-modal-create',
  standalone: true,
  imports: [NgIf, NgFor,MatButton, MatIconModule, MatDialogModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.css',
  providers: [MonstroService, PersonagemService]
})
export class ModalCreateComponent implements OnInit {
  formulario: FormGroup
  habilidadesMentais:habilidade[] = [] 
  habilidadesFisicas:habilidade[] = [] 
  async ngOnInit(): Promise<void> {
    console.log(this.habilidadesFisicas)
    console.log(this.habilidadesMentais)
  }

  constructor(
    private router: Router,
    private monstroService: MonstroService,
    @Inject(MAT_DIALOG_DATA) public data:{tipo:string},
    private dialogAtual: MatDialogRef<ModalCreateComponent>,
    private personagemService: PersonagemService
  ) {
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      historia: new FormControl('')
    })
  }
  readonly dialog = inject(MatDialog)


  onSubmit() {
    if(this.router.url == "/monstros"){
      this.monstroService.create(this.formulario)
    }else{
      this.personagemService.create(this.formulario)
    }
    this.dialogAtual.close()
  }
}
