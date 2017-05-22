import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private user:any;

  constructor(private _userService:UserService) {


  }

  ngOnInit() {
  }

  public setUser(userId:number){
        this.getUser(userId);
  }

  public getUser(userId:number){
        return this._userService.getUserDetails(userId).then(
          (data:any)=>{
            this.user = data.json();
          }
        )
  }

}
