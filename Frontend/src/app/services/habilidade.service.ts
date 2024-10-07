import { HttpClient } from '@angular/common/http';
import { environment } from '../../envs/env';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { habilidade } from '../Interfaces/habilidade.interface';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  create(form: FormGroup){
    const formData = form.value
    this.http.post(`${this.apiUrl}/habilidade/create`, formData).subscribe((res) => {console.log(res)})
  }

  getAllTipo(tipo:string){
    return this.http.get<habilidade[]>(`${this.apiUrl}/habilidade/getAll/${tipo}`)
  } 
}
