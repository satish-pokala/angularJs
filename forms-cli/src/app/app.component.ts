import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userLang = navigator.language;

  constructor(){
    console.log(this.userLang);
  }
  todayDate:Date = new Date();
  user:any = {
    username:'',
    password:''
  }

}
