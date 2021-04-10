import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  searchCountrie(arg: string): Observable<any> {

    const url = `${this._apiUrl}/name/${arg}`

    return this.http.get(url);
  }





}
