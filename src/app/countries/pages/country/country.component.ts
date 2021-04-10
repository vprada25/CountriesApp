import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent {

  arg: string = ''

  constructor(private countriService: CountryService) { }


  search() {
    console.log(this.arg)
    this.countriService.searchCountrie(this.arg)
      .subscribe(res =>
        console.log(res))

  }



}
