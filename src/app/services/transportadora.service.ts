import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {
  private transportadorasAPIUrl = 'http://localhost:8080/api/transportadora/';


  constructor(private http: HttpClient) { }

  listarTransportadoras(): Observable<any> {
    return this.http.get(`${this.transportadorasAPIUrl}`);
  }
}
