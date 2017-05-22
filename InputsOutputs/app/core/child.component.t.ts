/**
 * Created by satish on 04/05/17.
 */



import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector:'child-comp',
    template:`Hello from child component
        
        <h2><span>Count : {{count}}</span></h2>
        
        <div>
                Send Data: <input type="text" #text (keyup)="onChange(text.value)"/>
            
        </div>
        
`
})

export class ChildComponent{
    @Input()  private count:number = 1;
    @Output() private textEvent = new EventEmitter<string>();

    private onChange(value:string){
        this.textEvent.emit(value);
    }
}