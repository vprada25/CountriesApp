import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: []
})
export class CountryInputComponent  {


  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  arg:string= '';

  search(){
    this.onEnter.emit(this.arg);
    
  }

  
}
