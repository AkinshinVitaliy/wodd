import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekInfoComponent } from './week-info.component';

describe('WeekInfoComponent', () => {
  let component: WeekInfoComponent;
  let fixture: ComponentFixture<WeekInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
