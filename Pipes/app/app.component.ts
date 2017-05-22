
import { Component } from '@angular/core';


@Component({
    selector: 'pipe-app',
    template: `<p>The jacob birthday is {{ birthday}}</p>

    <br>
    
    <p>number format: {{num | number}}</p>
    
    
`
})

export class AppComponent {
   private birthday = new Date(1988, 3, 15); // April 15, 1988

   private num: number = 2.718281828459045;
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */