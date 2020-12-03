import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { EditempComponent } from './editemp/editemp.component';

const routes: Routes = [
  { path: 'add', component: AddempComponent },
  { path: 'view', component: ViewempComponent },
  { path: 'edit/:eid', component: EditempComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
