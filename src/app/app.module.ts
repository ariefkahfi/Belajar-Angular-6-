import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Custom directive classes
import {HoverColor} from "./custom-directives/MyDirective.directive";

// FormsModule
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HoverColor
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
