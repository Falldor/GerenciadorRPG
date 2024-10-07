import { ModalCreateComponent } from '../../shared/modais/modal-create/modal-create.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MonstroService } from '../../services/monstro.service';
import { monstro } from '../../Interfaces/monstro.interface';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-monstros',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, NgIf, NgFor, ModalCreateComponent],
  templateUrl: './monstros.component.html',
  styleUrl: './monstros.component.css',
  providers: [MonstroService]
})
export class MonstrosComponent implements OnInit {
  readonly dialog = inject(MatDialog)
  monstros: monstro[] = []
  constructor(private monstroService: MonstroService) { }

  async ngOnInit(): Promise<void> {
    await this.getAll();
    console.log(this.monstros)
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(ModalCreateComponent, { height: '75%', width: '95%' });
    dialogRef.afterClosed().subscribe(() => {window.location.reload()})
  }

  async getAll() {
    try {
      this.monstros = await firstValueFrom(this.monstroService.getAll())
    } catch (error) {
      console.log(error)
    }
  }


}
