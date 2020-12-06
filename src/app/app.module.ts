import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { VolumeComponent } from './volume/volume.component';
import { FoodComponent } from './food/food.component';
import { TaxComponent } from './tax/tax.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculatorComponent,
    VolumeComponent,
    FoodComponent,
    TaxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
