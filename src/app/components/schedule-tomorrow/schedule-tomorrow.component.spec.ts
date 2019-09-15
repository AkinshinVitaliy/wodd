import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTomorrowComponent } from './schedule-tomorrow.component';

describe('ScheduleTomorrowComponent', () => {
  let component: ScheduleTomorrowComponent;
  let fixture: ComponentFixture<ScheduleTomorrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTomorrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTomorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
