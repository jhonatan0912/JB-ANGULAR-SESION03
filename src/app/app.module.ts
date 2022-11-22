import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercice1Component } from './components/exercice1/exercice1.component';
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Exercice3Component } from './components/exercice3/exercice3.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
