import { Component } from "@angular/core";
import { Person } from "../models/person";

@Component({
    selector: 'directive-comp',
    templateUrl: './directive-comp.component.html',
    styleUrls: ['./directive-comp.component.css']
})
export class DirectiveComponent {

    person: Person = new Person();

    people: Person[] = [];

    colorCondition = false;

    constructor() {
        this.person.name = "Angular";
        this.person.age = 3;

        this.people.push(this.person);
        this.people.push(this.person);
        this.people.push(this.person);
        this.people.push(this.person);
    }

    printPerson(per: Person, i: number) {
        console.log(per.name, i);
    }
}