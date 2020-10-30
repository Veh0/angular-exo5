import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  BASE_URL = 'http://localhost:3000/cats';

  constructor(private http:HttpClient) { }

  findAll() : Observable<Cat[]> {
    return this.http.get<Cat[]>(this.BASE_URL);
  }

  getById(id:number) : Observable<Cat> {
    return this.http.get<Cat>(this.BASE_URL + `/${id}`);
  }

  create(cat:Cat) : Observable<Cat[]> {
    return this.http.post<Cat[]>(this.BASE_URL, cat)
  }

  update(id:number, cat:Cat) : Observable<Cat[]> {
    return this.http.put<Cat[]>(this.BASE_URL + `/${id}`, cat)
  }

  delete(id:number) : Promise<any> {
    return fetch(this.BASE_URL + `/${id}`, {
      method: 'DELETE'
    });
  }
}
