import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { Component } from '@angular/core';
import { HabilidadeService } from '../../../services/habilidade.service';



@Component({
  selector: 'app-modal-habilidade',
  standalone: true,
  imports: [MatButton, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './modal-habilidade.component.html',
  styleUrl: './modal-habilidade.component.css',
  providers:[HabilidadeService]
})
export class ModalHabilidadeComponent {
  formulario: FormGroup

  constructor(private dialogAtual: MatDialogRef<ModalHabilidadeComponent>, private habildiadeService:HabilidadeService) {
    this.formulario = new FormGroup({
      nome: new FormControl(''),
      descricao: new FormControl(''),
      tipo: new FormControl('mental')
    })
  }

  onSubmit() {
    console.log(this.formulario.value)
    this.habildiadeService.create(this.formulario)
    this.dialogAtual.close()
  }
}
