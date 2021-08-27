import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTripsSideBarComponent } from './components/my-trips-side-bar/my-trips-side-bar.component';
import { MyTripsHeaderComponent } from './components/my-trips-header/my-trips-header.component';
import { MyTripsRoutingModule } from './my-trips-routing.module';
import { MyTripsPageComponent } from './pages/my-trips-page/my-trips-page.component';
import { MyTripsListComponent } from './components/my-trips-list/my-trips-list.component';
import { MyTripsListItemComponent } from './components/my-trips-list-item/my-trips-list-item.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { MyTripsFooterComponent } from './components/my-trips-footer/my-trips-footer.component';



@NgModule({
  declarations: [
    MyTripsSideBarComponent,
    MyTripsHeaderComponent,
    MyTripsPageComponent,
    MyTripsListComponent,
    MyTripsListItemComponent,
    MyTripsFooterComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MyTripsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class MyTripsModule { }
