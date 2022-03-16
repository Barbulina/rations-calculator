import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { RATIONS_INFO_LIST } from 'src/app/data/ration-info-list';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { BloodGlucoseIndexColorPipe } from '../../pipes/blood-glucose-index-color.pipe';
import { RationFormComponent } from './ration-form.component';

describe('RationFormComponent', () => {
  let component: RationFormComponent;
  let fixture: ComponentFixture<RationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [RationFormComponent, BloodGlucoseIndexColorPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('optionSelect', () => {
    it('should emit option selected and set form to undefine', () => {
      const name = RATIONS_INFO_LIST[0].name;
      component.options = RATIONS_INFO_LIST.slice(0, 1);
      component.myControl.setValue(name);

      spyOn(component.optionSelected, 'emit');
      spyOn(component.myControl, 'setValue');

      component.optionSelect();

      expect(component.optionSelected.emit).toHaveBeenCalledWith(RATIONS_INFO_LIST[0]);
      expect(component.myControl.setValue).toHaveBeenCalledWith(undefined);
    });
  });
});
