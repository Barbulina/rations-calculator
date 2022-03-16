import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';
import { Ration } from '../../models/ration';

@Component({
  selector: 'app-ration-form',
  templateUrl: './ration-form.component.html',
  styleUrls: ['./ration-form.component.scss']
})
export class RationFormComponent implements OnInit {
  @Output() optionSelected: EventEmitter<any> = new EventEmitter();
  @Input() options: Ration[] = [];

  myControl = new FormControl(null);
  filteredOptions: Observable<Ration[]> = new Observable();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((option) => (option ? this._filter(option) : this.options.slice()))
    );
  }

  optionSelect() {
    const value = this.myControl.value;
    const optionSelected = this.options.find((option) => option.name === value);
    this.myControl.setValue(undefined);
    this.optionSelected.emit(optionSelected);
  }

  private _filter(value: string): Ration[] {
    if (!value) return this.options;
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
