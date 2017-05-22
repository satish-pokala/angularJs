import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {RouterModule} from "@angular/router";
import {appRouting} from "./app.routes";
import {HttpModule} from "@angular/http";
import {ParentComponent} from "./parent.component";
import {ChildComponent} from "./child.component.t";

@NgModule({
    imports:      [
        BrowserModule,
        RouterModule,
        HttpModule,
        appRouting,
    ],
    declarations: [ AppComponent,ParentComponent,ChildComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */