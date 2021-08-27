import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTripsFooterComponent } from './my-trips-footer.component';

describe('MyTripsFooterComponent', () => {
  let component: MyTripsFooterComponent;
  let fixture: ComponentFixture<MyTripsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTripsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
