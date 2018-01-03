import {
    Component, Input, OnInit, ElementRef, ContentChild, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
    AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']

})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {


  @Input('carItem') car: {name: string, year: number};
  @Input() name:string,
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor(){
      console.log('constructor');
  }
    ngOnInit(): void {
        console.log('ngOnInit');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }
    ngDoCheck() {
      console.log('docheck');
}
    ngAfterContentInit() {
      console.log('AfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('AfterContentChecked');
    }
}
