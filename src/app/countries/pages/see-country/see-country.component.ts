import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  constructor(
    private activatedRouted: ActivatedRoute,
    private CountryService: CountryService) { }

  ngOnInit(): void {



    this.activatedRouted.params
      .pipe(
        switchMap(({ id }) => this.CountryService.gerCountryforalpha(id))
      )
      .subscribe(res => {
        console.log(res)
      })
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
