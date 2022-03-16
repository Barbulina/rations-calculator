import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RATIONS_INFO_LIST } from './data/ration-info-list';
import { ListService } from './services/list.service';
import { CONFIG } from './shared/config';
import { Ration } from './shared/models/ration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<Ration> = [];
  options: Ration[] = RATIONS_INFO_LIST;

  constructor(translate: TranslateService, private listService: ListService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(CONFIG.language.default);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(CONFIG.language.default);

    this.items = this.listService.restore();
  }

  optionSelected(option: Ration): void {
    this.items.push(option);
  }
}
