import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { SifyGuard } from './sify.guard';
import { VolumeComponent } from './volume/volume.component';
import { TaxComponent } from './tax/tax.component';
import { FoodComponent } from './food/food.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'calc', component: CalculatorComponent, canActivate: [SifyGuard] },
  { path: 'volume', component: VolumeComponent, canActivate: [SifyGuard] },
  {
    path: 'tax',
    component: TaxComponent,
    canActivate: [SifyGuard],
    data: { role: 'admin' }
  },
  {
    path: 'bill',
    component: FoodComponent,
    canActivate: [SifyGuard],
    data: { role: 'admin' }
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
