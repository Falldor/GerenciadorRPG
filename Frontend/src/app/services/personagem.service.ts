import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { personagem } from '../Interfaces/personagem.interface';
import { environment } from '../../envs/env';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const headers = new HttpHeaders({
  'Auth': `${environment.AUTH_TOKEN}`
});



@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {   }

  create(form: FormGroup){
    const jogadorId = "02046963-cbf3-45cb-a3e9-1bb432322829"
    const formData = form.value
    this.http.post(`${this.apiUrl}/personagem/create/${jogadorId}`,formData, {headers}).subscribe((res) => {console.log(res)})
  }
  
  getAllPersonagens():Observable<personagem[]>{
    return this.http.get<personagem[]>(`${this.apiUrl}/personagem/getAllPersonagens`, {headers})
  }

  edit(id:string, form:FormGroup){
    const formData = form.value
    this.http.put(`${this.apiUrl}/personagem/edit/${id}`, formData, {headers}).subscribe((res) => {console.log(res)})
  }

  async delete(id:string){
    await this.http.delete(`${this.apiUrl}/personagem/delete/${id}`, {headers}).subscribe((res) => {console.log(res)})
  }



}
