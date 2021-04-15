import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../service/country.service';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRouted: ActivatedRoute,
    private CountryService: CountryService) { }

  ngOnInit(): void {


    this.activatedRouted.params
      .pipe(
        switchMap(({ id }) => this.CountryService.gerCountryforalpha(id)),
        tap(console.log)
      )
      .subscribe(res => this.country = res)


    /* this.activatedRouted.params
      .subscribe(({ id }) => {
        console.log(id)
        this.CountryService.gerCountryforalpha(id)
          .subscribe(country => {
            console.log(country)
          })

      })
 */
  }

}
