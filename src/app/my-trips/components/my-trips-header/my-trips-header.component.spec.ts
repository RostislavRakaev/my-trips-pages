import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsHeaderComponent } from './my-trips-header.component';

describe('MyTripsHeaderComponent', () => {
  let component: MyTripsHeaderComponent;
  let fixture: ComponentFixture<MyTripsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTripsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
