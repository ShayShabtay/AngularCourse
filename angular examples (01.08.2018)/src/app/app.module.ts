import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComp } from './my-comp/my-comp.component';

import {FormsModule} from '@angular/forms';
import { DirectiveComponent } from './directives/directive-comp.component';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './communication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComp,
    DirectiveComponent,
    CommunicationComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
