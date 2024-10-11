/*
Monstros tem a função de exibir os monstros criados, que podem ser editados ou delatados atréves do clique que chama o componete de edição de monstro
além de tambem chamar o componete de criação de monstros
*/

import { ModalCreateComponent } from '../../shared/modais/modal-create/modal-create.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MonstroService } from '../../services/monstro.service';
import { monstro } from '../../Interfaces/monstro.interface';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { EditComponent } from '../../shared/modais/edit/edit.component';

@Component({
  selector: 'app-monstros',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NgIf, NgFor, ModalCreateComponent, MatTableModule],
  templateUrl: './monstros.component.html',
  styleUrl: './monstros.component.css',
  providers: [MonstroService]
})
export class MonstrosComponent implements OnInit {
  readonly dialog = inject(MatDialog)

  displayedColumns:string[] = ['nome', 'nivelFisico', 'nivelMental']
  monstros: monstro[] | undefined = []

  constructor(private monstroService: MonstroService) { }

  async ngOnInit(): Promise<void> {
    this.monstros = await this.getAll();
    console.log(this.monstros?.length)
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ModalCreateComponent, { height: '75%', width: '95%', data: {tipo:'monstro'} });
    dialogRef.afterClosed().subscribe(async () => {this.monstros = await this.getAll()})
  }

  async getAll(): Promise<any>{
    try {
      const resultado = await firstValueFrom(this.monstroService.getAll())
      if(resultado != undefined){
        return resultado
      }else{
        return []
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  openEditDialog(monstro:monstro){
    const dialogRef = this.dialog.open(EditComponent, {data:{monstro}})
    dialogRef.afterClosed().subscribe(() => {window.location.reload()})
  
  }


}
