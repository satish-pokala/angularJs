/**
 * Created by satish on 05/05/17.
 */


import {Component} from "@angular/core";

@Component({
    templateUrl:'employee.html'
})

export class EmployeeComponent{

    private empObj:any = [
        {
            "empName": "Satish",
            "empDesignation": "Engineering Lead"
        },
        {
            "empName": "Amit",
            "empDesignation": "Sr Software Eng"
        }

    ]
}