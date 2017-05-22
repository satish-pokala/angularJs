/**
 * Created by satish on 08/05/17.
 */


import {Component} from "@angular/core";

@Component({
    templateUrl:'employeeDetail.html'
})

export class EmployeeDetailComponent{

    private empObj:any = [
        {
            "empName": "Satish",
            "empDesignation": "Engineering Lead",
            "empAge": "31",
            "empAddress" :"Hyderabad, India",
            "empPhone":"9538780501",
            "empEmail":"s.pokala@everteam.com"
        }
    ]
}