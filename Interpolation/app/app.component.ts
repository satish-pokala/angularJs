import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `

    <h1>Hello read some value from property of a class </h1>
    
    <h3>{{msg}}</h3>

`
})
export class AppComponent {

    msg:string = "Hello ...";

}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */