import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'my-trips', pathMatch: 'full'},
  {path: 'my-trips', loadChildren: () => import('./my-trips/my-trips.module').then(m => m.MyTripsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
