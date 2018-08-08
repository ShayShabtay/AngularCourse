import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, AfterViewInit } from "@angular/core";
import { Person } from "../../models/person";

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit{
    @Input()
    newperson: Person; // can be any type

    @Output()
    change = new EventEmitter<string>();

    constructor(){
        console.log('ctor', this.newperson);
    }

    ngOnInit(): void {
        console.log('init', this.newperson);
    }

    passData(name: string){
        this.change.emit(name);
    }
}
