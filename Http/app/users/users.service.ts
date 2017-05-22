/**
 * Created by satish on 04/05/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UsersService{

    constructor(private _http: Http){}

    public getUsers(): Promise<Response> {
        return this._http.get("https://jsonplaceholder.typicode.com/users").toPromise();
    }

}