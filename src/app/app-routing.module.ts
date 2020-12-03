import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { VolumeComponent } from './volume/volume.component';
import { TaxComponent } from './tax/tax.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  { path: 'calc', component: CalculatorComponent },
  { path: 'volume', component: VolumeComponent },
  { path: 'tax', component: TaxComponent },
  { path: 'food', component: FoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
