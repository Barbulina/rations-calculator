import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blood-glucose-index',
  templateUrl: './blood-glucose-index.component.html',
  styleUrls: ['./blood-glucose-index.component.scss']
})
export class BloodGlucoseIndexComponent {
  @Input() bloodGlucoseIndex: number | undefined = 0;
  @Input() hideNumber: boolean = false;
}
