import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PersonasServices {

  private baseUrl = '/lab/personas';

  constructor(private http: HttpClient) { }

  getPersonas(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPersonas(persona: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, persona);
  }

  updatePersonas(id: number, value: any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePersonas(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'});
  }

  getPersonasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
