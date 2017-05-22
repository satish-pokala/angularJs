import {Component} from "@angular/core";
import {UsersService} from "./users.service";

@Component({
    templateUrl:'users.html'
})


export class UsersComponent {

    private  usersData:any;

    constructor(private _userService:UsersService){

    }

    private getUsers(){
        console.log("got")
        this._userService.getUsers().then(
            (data:any)=> {
                this.usersData  = data.json();
            });
    }
}