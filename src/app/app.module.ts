import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { FormsModule } from '@angular/forms';
import { PfPipe } from './pf.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { SearchbyPipe } from './searchby.pipe';
import { EditempComponent } from './editemp/editemp.component';

@NgModule({
  declarations: [AppComponent, AddempComponent, ViewempComponent, PfPipe, OrderbyPipe, SearchbyPipe, EditempComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
