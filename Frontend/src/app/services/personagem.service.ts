import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../envs/env';
import { personagem } from '../Interfaces/personagem.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {   }
  
  getAllPersonagens():Observable<personagem[]>{
    return this.http.get<personagem[]>(`${this.apiUrl}/personagem/getAllPersonagens`)
  }

}
