import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";

const routes: Routes = [
  {
    path:"",
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[EmployeeComponent]
})
export class EmpRoutingModule { }
