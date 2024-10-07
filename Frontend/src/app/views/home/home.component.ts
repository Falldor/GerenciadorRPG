import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';
import { PersonagemService } from '../../services/personagem.service';
import { personagem } from '../../Interfaces/personagem.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [PersonagemService]
})
export class HomeComponent implements OnInit{

  constructor(private personagemService: PersonagemService){ }
  
  personagens: personagem[] = []

  async ngOnInit(): Promise<void> {
    await this.getAllPersonagens();
  }

  async getAllPersonagens() {
    try {
      this.personagens = await firstValueFrom(this.personagemService.getAllPersonagens());
    } catch (error) {
      console.error('Erro ao obter os personagens', error);
    }
  }
  
}
