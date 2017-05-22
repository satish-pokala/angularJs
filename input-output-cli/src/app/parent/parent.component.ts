import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  private psgCount:number = 0;
  private cameFromChild:string;

  constructor() { }

  ngOnInit() {
  }

  private increaseCount(){
      this.psgCount++;
  }
}
