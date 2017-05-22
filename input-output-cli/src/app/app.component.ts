import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  private average:number = 2.888999;

  private date:Date = new Date();

  private data:any= {
    age:21,
    name:'satish'
  }
}

