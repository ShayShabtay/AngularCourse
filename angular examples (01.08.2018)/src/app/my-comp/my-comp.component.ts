import { Component } from "@angular/core";
import { Person } from "../models/person";

@Component({
    selector: 'my-comp',
    templateUrl: `./my-comp.component.html`,
    styleUrls: [`./my-comp.component.css`]
})
export class MyComp {
    name: string = "Angular";
    applyRedDivStyle = false;
    divColor = 'green';

    unitPrice = 1;

    person: Person;

    constructor(){
        this.person = new Person();
        this.person.age = 1;
    }

    onClick(event){
       this.name = "React !";
       this.applyRedDivStyle = true;
       console.log(event);
    }

    printData(foo: MouseEvent){
        console.log(foo.clientX);
    }

    onInputClick(inputTemplateVariable){
        console.log(inputTemplateVariable);
        console.log({input: inputTemplateVariable});
    }
}
