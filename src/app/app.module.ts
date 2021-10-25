import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrekeComponent } from './components/preke/preke.component';
import { ParduotuveComponent } from './components/parduotuve/parduotuve.component';
import { KrepselisComponent } from './components/krepselis/krepselis.component';

@NgModule({
  declarations: [
    AppComponent,
    PrekeComponent,
    ParduotuveComponent,
    KrepselisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }