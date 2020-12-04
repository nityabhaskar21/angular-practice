import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';

const routes: Routes = [
  { path: 'input', component: ParentComponent },
  { path: 'output', component: Parent2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
