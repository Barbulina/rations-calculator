import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../../config';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  contact = CONFIG.contact;
  language = CONFIG.language;
  selectedLanguage: string = CONFIG.language.default;

  constructor(public dialog: MatDialog, private translate: TranslateService) {}

  openInfoDialog() {
    this.dialog.open(InfoDialogComponent);
  }

  changeLanguage(languageCode: string) {
    this.selectedLanguage = languageCode;
    this.translate.use(this.selectedLanguage);
  }
}
