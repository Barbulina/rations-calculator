import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodGlucoseIndexComponent } from './blood-glucose-index.component';

describe('BloodGlucoseIndexComponent', () => {
  let component: BloodGlucoseIndexComponent;
  let fixture: ComponentFixture<BloodGlucoseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodGlucoseIndexComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodGlucoseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
