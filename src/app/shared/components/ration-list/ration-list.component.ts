import { Component, Input, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { CONFIG } from 'src/app/shared/config';
import { Ration } from 'src/app/shared/models/ration';

@Component({
  selector: 'app-ration-list',
  templateUrl: './ration-list.component.html',
  styleUrls: ['./ration-list.component.scss']
})
export class RationListComponent implements OnInit {
  @Input() items: Array<Ration> = [];

  appearance = CONFIG.ui.formArparience;
  total: number = 0;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.calcTotal();
  }

  onWeightChange(event: any, item: Ration): void {
    console.log(event.target.value, item.gramsToCarbohydrate);
    item.weight = event.target.value;
    item.rations = +(event.target.value / item.gramsToCarbohydrate).toFixed(2);
    this.calcTotal();
    this.listService.save(this.items);
  }

  calcTotal(): void {
    this.total = +this.items
      .reduce((acc, item: any) => {
        return acc + +item.rations;
      }, 0)
      .toFixed(2);
  }

  removeItem(indexToRemove: number): void {
    this.items.splice(indexToRemove, 1);
    this.calcTotal();
    this.listService.save(this.items);
  }
}
