import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    template:`
            <div style="background-color: aquamarine;">Hello from parent component....!
                <h4><input type="button" value="Increment Count" (click)="updateData()"/></h4>
                <br>
                  Data comes from child component to parent : {{dataFromChild}}
            </div>
            
            
            <br>
           
            <div style="background-color: antiquewhite">
                <child-comp (textEvent)="dataFromChild=$event" [count]="countIncrement"></child-comp>
            </div>
            
`
})

export class ParentComponent{

    private countIncrement:number = 1;
    private dataFromChild:string;

    private updateData(){
        this.countIncrement++;
    }

}