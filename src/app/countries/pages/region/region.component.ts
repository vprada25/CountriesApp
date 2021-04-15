import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../../service/country.service';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [`
  button{
    margin-right: 5px
  }
    `
  ]
})
export class RegionComponent  {

  region: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string= ''
  country : Country[] = [];

  constructor(private countryService: CountryService) { }

  activeRegion (termino : string){
    
    if(termino === this.regionActive) {return;}
    this.regionActive = termino;
    this.country = [];
   
    this.countryService.searchRegion(termino)
      .subscribe((res) => {
        console.log(res)
        this.country = res;
  
      }
      )
  }

  getClassCss (arg: string):string{
    return (arg=== this.regionActive) ? 'btn btn-primary': 'btn btn-outline-primary'
  }


 


  
}
