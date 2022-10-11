import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
/*import { HttpOptions } from '@angular/common/http'*/

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  obtenerDatos(apiURL){
    console.log(this.http.get('https://jsonplaceholder.typicode.com/users'))
  }

}
