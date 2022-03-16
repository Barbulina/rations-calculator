import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloodGlucoseIndexColorPipe } from '../../pipes/blood-glucose-index-color.pipe';
import { BloodGlucoseIndexComponent } from './blood-glucose-index.component';

describe('BloodGlucoseIndexComponent', () => {
  let component: BloodGlucoseIndexComponent;
  let fixture: ComponentFixture<BloodGlucoseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloodGlucoseIndexComponent, BloodGlucoseIndexColorPipe]
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
