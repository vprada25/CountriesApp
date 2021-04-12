import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent {

  arg: string = ''
  Error: boolean = false;
  country: Country[] = [];

  constructor(private countriService: CountryService) { }


  search(termino: string) {
    this.Error = false
    this.arg = termino
    this.countriService.searchCountrie(this.arg)
      .subscribe((res) => {
        console.log(res)
        this.country = res;

      },
        (error) => {
          this.Error = true;
          console.log(error);
          this.country = []
        }

      )
  }

  suggestions(arg: string) {
    this.Error = false;

    //TODO crear sugerencias.
  }
}
