import { Component } from "@angular/core";
import { Person } from "../models/person";

@Component({
    selector: 'communication-comp',
    templateUrl: './communication.component.html',
    styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
    parentPerson: Person = new Person();

    constructor(){
        this.parentPerson.name = "From Parent !";
        this.parentPerson.age = 4;
    }

    onChange(newName){
        this.parentPerson.name = newName;
    }
}