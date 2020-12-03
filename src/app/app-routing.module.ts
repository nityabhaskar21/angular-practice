import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  { path: 'add', component: AddbooksComponent },
  { path: 'view', component: ViewbooksComponent },
  { path: 'edit/:bid', component: EditbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
