import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ProdbreifComponent } from './prodbreif/prodbreif.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    UserComponent,
    ProdbreifComponent,
    ProddetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
