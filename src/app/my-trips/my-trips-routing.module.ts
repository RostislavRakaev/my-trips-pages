import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTripsPageComponent } from './pages/my-trips-page/my-trips-page.component';

const routes: Routes = [
  {path: '', component: MyTripsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTripsRoutingModule { }
