import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: []
})
export class CountryInputComponent implements OnInit {
  
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();
  
  arg: string = '';
  

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe(arg => {
      this.onDebounce.emit(arg)
    })
  }

  search() {
    this.onEnter.emit(this.arg);

  }

  keypressed(){
    this.debouncer.next(this.arg);


  }


}
