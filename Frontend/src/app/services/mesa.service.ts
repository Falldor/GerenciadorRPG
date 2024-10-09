import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { mesa } from '../Interfaces/mesa.interface';
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
export class MesaService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {   }

  create(form: FormGroup){
    const jogadorId = "a97658c9-e76e-4a23-8bdc-d770b62417a3"
    const formData = form.value
    this.http.post(`${this.apiUrl}/mesa/create/${jogadorId}`,formData, {headers}).subscribe((res) => {console.log(res)})
  }
  
  getAllPersonagens():Observable<mesa[]>{
    return this.http.get<mesa[]>(`${this.apiUrl}/mesa/getAllPersonagens`, {headers})
  }

  getMesaByid(idMesa:string):Observable<mesa>{
    return this.http.get<mesa>(`${this.apiUrl}/mesa/getById/${idMesa}`, {headers})
  }

  addMonstro(idMesa:string, MonstrosId:string[]){
    this.http.put(`${this.apiUrl}/mesa/addMonstro/${idMesa}`, {MonstrosId}, {headers}).subscribe((res) => {console.log(res)})
  }
  addPersonagem(idMesa:string, PersonagensId:string[]){
    this.http.put(`${this.apiUrl}/mesa/addPersonagem/${idMesa}`, {PersonagensId}, {headers}).subscribe((res) => {console.log(res)})
  }

  async delete(id:string){
    await this.http.delete(`${this.apiUrl}/mesa/delete/${id}`, {headers}).subscribe((res) => {console.log(res)})
  }



}
