import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */