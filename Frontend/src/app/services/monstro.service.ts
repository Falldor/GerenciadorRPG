import { monstro } from '../Interfaces/monstro.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../envs/env';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
const headers = new HttpHeaders({
  'Auth': `${environment.AUTH_TOKEN}`
});

@Injectable({
  providedIn: 'root'
})
export class MonstroService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {
    
   }

  create(form: FormGroup){
    const formData = form.value
    this.http.post(`${this.apiUrl}/monstro/create`, formData,{headers}).subscribe((res) => {console.log(res)})
  }

  getAll(){
    return this.http.get<monstro[]>(`${this.apiUrl}/monstro/getAll`, {headers})
  }

  edit(id:string, form: FormGroup){
    const formData = form.value
    this.http.put(`${this.apiUrl}/monstro/edit/${id}`, formData, {headers}).subscribe((res) => {console.log(res)})
  }

  delete(id:string){
    this.http.delete(`${this.apiUrl}/monstro/delete/${id}`, {headers}).subscribe((res) => {console.log(res)})
  }
}
