import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countrie.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: []
})
export class CountryTableComponent {

  constructor() { }

  @Input() country: Country[] = [];


}
