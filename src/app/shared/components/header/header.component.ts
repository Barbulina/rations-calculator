import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CONFIG } from '../../config';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  contact = CONFIG.contact;

  constructor(public dialog: MatDialog) {}

  openInfoDialog() {
    this.dialog.open(InfoDialogComponent);
  }
}
