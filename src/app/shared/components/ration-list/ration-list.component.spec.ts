import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { RATIONS_INFO_LIST } from 'src/app/data/ration-info-list';
import { ListService } from 'src/app/services/list.service';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { RationListComponent } from './ration-list.component';

describe('RationListComponent', () => {
  let component: RationListComponent;
  let fixture: ComponentFixture<RationListComponent>;
  let listService: ListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularMaterialModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [RationListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RationListComponent);
    component = fixture.componentInstance;
    listService = TestBed.get(ListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save item with rations calculate', () => {
    const item = RATIONS_INFO_LIST[0];
    const weight = 200;
    const expectedRations = 1;

    spyOn(listService, 'save');
    spyOn(component, 'calcTotal');

    component.onWeightChange({ target: { value: weight } }, item);

    expect(item.weight).toBe(weight);
    expect(item.rations).toBe(expectedRations);

    expect(listService.save).toHaveBeenCalled();
    expect(component.calcTotal).toHaveBeenCalled();
  });

  it('should remove item', () => {
    component.items = RATIONS_INFO_LIST.slice(0, 1);

    spyOn(listService, 'save');
    spyOn(component, 'calcTotal');

    component.removeItem(0);

    expect(component.items.length).toBe(0);
    expect(listService.save).toHaveBeenCalled();
    expect(component.calcTotal).toHaveBeenCalled();
  });
});
