import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() private passengersCount:number = 0;
  @Output() private textUpdate = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  private sendData(val:string){
    console.log(val);
    this.textUpdate.emit(val);
  }


}
