import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

import {Tarea} from '../Tarea'
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private urlApi = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) { }
  getTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.urlApi)
  }
}
