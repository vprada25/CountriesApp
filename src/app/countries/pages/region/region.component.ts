import { Component } from '@angular/core';

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

  constructor() { }

  activeRegion (arg : string){
    this.regionActive = arg;
  }

  
}
