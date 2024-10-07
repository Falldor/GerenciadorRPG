import { monstro } from '../Interfaces/monstro.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../envs/env';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MonstroService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {
    
   }

  create(form: FormGroup){
    const formData = form.value
    this.http.post(`${this.apiUrl}/monstro/create`, formData).subscribe((res) => {console.log(res)})
  }

  getAll(){
    return this.http.get<monstro[]>(`${this.apiUrl}/monstro/getAll`)
  }
}
