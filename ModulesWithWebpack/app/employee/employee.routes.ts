

import {RouterModule} from "@angular/router";
import {EmployeeComponent} from "./employee.component";

const employeeRoutes = [
    {
        path: '',
        component: EmployeeComponent,

    }
];
export const empRouting = RouterModule.forChild(employeeRoutes);