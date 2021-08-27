import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsListItemComponent } from './my-trips-list-item.component';

describe('MyTripsListItemComponent', () => {
  let component: MyTripsListItemComponent;
  let fixture: ComponentFixture<MyTripsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTripsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
