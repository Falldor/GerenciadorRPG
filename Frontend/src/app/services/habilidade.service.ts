import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../envs/env';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { habilidade } from '../Interfaces/habilidade.interface';

const headers = new HttpHeaders({
  'Auth': `${environment.AUTH_TOKEN}`
});

@Injectable({
  providedIn: 'root'
})


export class HabilidadeService {

  private apiUrl = environment.apiUrl
  private auth = environment.AUTH_TOKEN

  constructor(private http: HttpClient) { }

  create(form: FormGroup) {
    const formData = form.value

    this.http.post(`${this.apiUrl}/habilidade/create`, formData, { headers }).subscribe((res) => { console.log(res) })
  }

  getAllTipo(tipo: string) {
    return this.http.get<habilidade[]>(`${this.apiUrl}/habilidade/getAll/${tipo}`, { headers })
  }
}
