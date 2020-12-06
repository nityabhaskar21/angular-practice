import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { ProdbreifComponent } from './prodbreif/prodbreif.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'products',
    component: ProdbreifComponent,
    children: [{ path: 'pdetails/:prodid', component: ProddetailsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
