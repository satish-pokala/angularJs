
import { Component } from '@angular/core';


@Component({
    selector: 'attr-dir',
    template: `
    
    
    <div [ngClass]="['attributeStyle']">
    
            <div [style.color]="colorParam">Hello this div effects with ngStyle attribute </div>
            
            <br>
            
            <div [ngStyle]="{'color':styleParams.color,'font-size':styleParams.size}">With multiple style attributes</div>
            
            <br>
            
            <div [ngClass]="['class1','class2']"> Hello this div effects with ngClass attribute</div>
                        
            <br>
            
            <div>This is 2 way binding example Name : <input [(ngModel)]="name" type="text" required></div>
            
            <br>
            
            Value:  {{name}}

    </div>
    
`,
    styles:['.class1{ font-size: 40px; }','.class2{ font-family:Verdana }','.attributeStyle{ padding: 50px }']
})

export class AppComponent {

    private colorParam:string = "green";

    private styleParams:any = {
        'color': 'blue',
        'size': '40px'
    }

    private name:string = 'asdsad';
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */