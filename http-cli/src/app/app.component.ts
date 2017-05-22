import { Component } from '@angular/core';
import {UserService} from "./user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  private users:any;

  constructor(private _userService:UserService){

  }

  public getUsers():any{

     this._userService.getUsers().then(
      (data:any)=>{
          this.users = data.json()
      }
    )

  }

  public getValue(value:string){

    console.log(value);
  }

}
