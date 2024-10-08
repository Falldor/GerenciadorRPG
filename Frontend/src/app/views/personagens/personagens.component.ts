import { ModalCreateComponent } from '../../shared/modais/modal-create/modal-create.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PersonagemService } from '../../services/personagem.service';
import { personagem } from '../../Interfaces/personagem.interface';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { EditComponent } from '../../shared/modais/edit/edit.component';







@Component({
  selector: 'app-personagens',
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, MatTableModule, MatDialogModule,ModalCreateComponent],
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.css',
  providers: [PersonagemService]
})
export class PersonagensComponent implements OnInit {

  displayedColumns:string[] = ['nome', 'nivelFisico', 'nivelMental']
  personagens: personagem[] = []

  readonly dialog = inject(MatDialog)
  

  constructor(private personageService: PersonagemService) {

  }

  async ngOnInit(): Promise<void> {
    this.personagens = await this.getAllPersonagens()
    console.log(this.personagens)
  }

  async getAllPersonagens() {
    return await firstValueFrom(this.personageService.getAllPersonagens())
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ModalCreateComponent, { height: '75%', width: '95%', data: {tipo: 'personagem'}});
    dialogRef.afterClosed().subscribe(async () => {this.personagens = await this.getAllPersonagens()})
  }

  openEditDialog(personagem: personagem){
    const dialogRef = this.dialog.open(EditComponent,{data: {personagem}})
    dialogRef.afterClosed().subscribe(async () => {this.personagens = await this.getAllPersonagens()})
  }
}
