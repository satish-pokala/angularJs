
import { EmployeeComponent} from "./employee.component";
import {NgModule} from "@angular/core";
import {empRouting} from "./employee.routes";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        empRouting,
        CommonModule
    ],
    declarations: [
        EmployeeComponent
    ],
    providers: [

    ]
})

export class EmployeeModule {
}