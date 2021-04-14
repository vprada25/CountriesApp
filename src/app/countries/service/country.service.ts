import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable/* , of */ } from 'rxjs';
import { Country } from '../interfaces/countrie.interface';
/* import {catchError} from 'rxjs/operators' */


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  searchCountrie(arg: string): Observable<Country[]> {

    const url = `${this._apiUrl}/name/${arg}`

    return this.http.get<Country[]>(url)
    /*  .pipe(
      catchError(err => of([]))
     ); */
  }

  searchCapital(arg: string): Observable<Country[]> {

    const url = `${this._apiUrl}/capital/${arg}`
    return this.http.get<Country[]>(url)

  }

  searchRegion(arg: string): Observable<Country[]> {

    const url = `${this._apiUrl}/region/${arg}`
    return this.http.get<Country[]>(url)

  }

  gerCountryforalpha(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`
    return this.http.get<Country>(url)

  }

}
