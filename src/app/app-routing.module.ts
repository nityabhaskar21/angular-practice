import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AlbumComponent } from './album/album.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';

const routes: Routes = [
  { path: 'games', component: GameComponent },
  { path: 'albums', component: AlbumComponent },
  {
    path: 'emps',
    component: EmpComponent,
    children: [{ path: 'empdetails/:eid', component: EmpdetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
