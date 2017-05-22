/**
 * Created by satish on 02/05/17.
 */
/*
 * Copyright (C) 2016, Ever Team Software
 *
 * The program(s) herein may be used and/or copied only with
 * the written permission of Ever Team Software or in accordance with
 * the terms and conditions stipulated in the agreement/contract
 * under which the program(s) have been supplied.
 * @author : Satish Pokala
 * @date   : 23 Sep,2016
 */

import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {EmployeeComponent} from "./employee.component";
import {EmployeeDetailComponent} from "./employeeDetail.component";



const appRoutes = [
    {
        path: '',
        redirectTo:'/employee',
        pathMatch:'full'
    },
    {
        path: 'employee',
        component:EmployeeComponent
    },
    {
        path: 'employee/empDetail',
        component:EmployeeDetailComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);