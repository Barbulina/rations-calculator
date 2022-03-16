import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { RATIONS_INFO_LIST } from './data/ration-info-list';
import { BloodGlucoseIndexComponent } from './shared/components/blood-glucose-index/blood-glucose-index.component';
import { RationFormComponent } from './shared/components/ration-form/ration-form.component';
import { RationListComponent } from './shared/components/ration-list/ration-list.component';
import { Ration } from './shared/models/ration';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { BloodGlucoseIndexColorPipe } from './shared/pipes/blood-glucose-index-color.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularMaterialModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        RationListComponent,
        RationFormComponent,
        BloodGlucoseIndexComponent,
        BloodGlucoseIndexColorPipe
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('optionSelected', () => {
    component.items = [];
    const option: Ration = RATIONS_INFO_LIST[0];
    component.optionSelected(option);
    expect(component.items.length).toBe(1);
    expect(component.items[0]).toEqual(option);
  });
});
