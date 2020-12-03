import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { FormsModule } from '@angular/forms';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { SearchbyPipe } from './searchby.pipe';
import { EditbookComponent } from './editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    ViewbooksComponent,
    SearchbyPipe,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
