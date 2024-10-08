import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalHabilidadeComponent } from '../modal-habilidade/modal-habilidade.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PersonagemService } from '../../../services/personagem.service';
import { HabilidadeService } from '../../../services/habilidade.service';
import { habilidade } from '../../../Interfaces/habilidade.interface';
import { MonstroService } from '../../../services/monstro.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component,inject ,Inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgIf,NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';




@Component({
  selector: 'app-modal-create',
  standalone: true,
  imports: [NgIf, NgFor,MatButton, MatIconModule, MatDialogModule, ModalHabilidadeComponent, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.css',
  providers: [MonstroService, HabilidadeService, PersonagemService]
})
export class ModalCreateComponent implements OnInit {
  formulario: FormGroup
  habilidadesMentais:habilidade[] = [] 
  habilidadesFisicas:habilidade[] = [] 
  async ngOnInit(): Promise<void> {
    this.habilidadesFisicas = await this.getAllTipo("fisico")
    this.habilidadesMentais = await this.getAllTipo("mental")
    console.log(this.habilidadesFisicas)
    console.log(this.habilidadesMentais)
  }

  constructor(
    private router: Router,
    private monstroService: MonstroService,
    private habilidadeService:HabilidadeService ,
    private dialogAtual: MatDialogRef<ModalCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{tipo:string},
    private personagemService: PersonagemService
  ) {
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      historia: new FormControl('')
    })
  }
  readonly dialog = inject(MatDialog)

  openHabilidadeDialog() {
    const dialogRef = this.dialog.open(ModalHabilidadeComponent, {width: '400px', position: { right: '0px' }})
    dialogRef.afterClosed().subscribe(async() => {
      this.habilidadesFisicas = await this.getAllTipo("fisico")
      this.habilidadesMentais = await this.getAllTipo("mental")
    })
  }

  onSubmit() {
    if(this.router.url == "/monstros"){
      this.monstroService.create(this.formulario)
    }else{
      this.personagemService.create(this.formulario)
    }
    this.dialogAtual.close()
  }

  async getAllTipo(tipo:string){
    return await firstValueFrom(this.habilidadeService.getAllTipo(tipo))
  }
}
