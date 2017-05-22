/**
 * Created by satish on 02/05/17.
 */

 class empInfo {

    constructor(){
        this.displayNameAndAge();
    }

    private  name:string = "Jacob";

    private  age:number  = 30;


    private getName():string {
        return this.name ;
    }

    private getAge():number{
        return 32;
    }

    private displayNameAndAge():void{
        document.getElementById("empInfo").textContent = this.getName()+" "+this.getAge();
    }

}

let emp = new empInfo();