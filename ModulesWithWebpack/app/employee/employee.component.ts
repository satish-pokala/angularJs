import {Component} from "@angular/core";
/**
 * Created by satish on 02/05/17.
 */


@Component({
    selector:'emp-info',
    templateUrl:'./employee.html'
})


export class EmployeeComponent{

    private  name:string = "Satish Pokala";
    private  address:string = "Hyderabad,India";
    private  telephoneNo:number = 9538780501;

}