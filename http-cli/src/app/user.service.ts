import { Injectable } from '@angular/core';
import "rxjs/add/operator/toPromise";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  public url:string = "https://jsonplaceholder.typicode.com/users"


  constructor(private _http:Http) { }

  public getUsers():any{
      return this._http.get(this.url).toPromise();
  }

  public getUserDetails(userId:number){
    return this._http.get(this.url+"/"+userId,).toPromise();
  }
}
