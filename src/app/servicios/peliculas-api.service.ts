import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasAPIService {
  APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las películas
  getPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(this.APIep);
  }

  // Método para obtener una película por su ID
  getPelicula(id: number): Observable<any> {
    return this.http.get<any>(`${this.APIep}/${id}`);
  }
}
