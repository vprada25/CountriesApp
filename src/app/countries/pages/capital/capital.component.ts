import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrie.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit {

  arg: string = ''
  Error: boolean = false;
  country: Country[] = [];

  constructor(private countriService: CountryService) { }


  search(termino: string) {
    this.Error = false
    this.arg = termino
    this.countriService.searchCapital(this.arg)
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
  }
  
  


  ngOnInit(): void {
  }

}
