import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsSideBarComponent } from './my-trips-side-bar.component';

describe('MyTripsSideBarComponent', () => {
  let component: MyTripsSideBarComponent;
  let fixture: ComponentFixture<MyTripsSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTripsSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
