import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const components = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...components],
  exports: [...components]
})
export class AngularMaterialModule {}
