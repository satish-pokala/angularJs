import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {RouterModule} from "@angular/router";
import {appRouting} from "./app.routes";
import {HttpModule} from "@angular/http";
import {EmployeeComponent} from "./employee.component";
import {EmployeeDetailComponent} from "./employeeDetail.component";

@NgModule({
    imports:      [
        BrowserModule,
        RouterModule,
        HttpModule,
        appRouting,
    ],
    declarations: [ AppComponent,EmployeeComponent,EmployeeDetailComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */