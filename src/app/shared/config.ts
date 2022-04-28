import { MatFormFieldAppearance } from '@angular/material/form-field';

export const CONFIG: Config = {
  localStrorageKey: 'ration-list',
  ui: {
    formArparience: 'legacy'
  },
  language: {
    editable: true,
    default: 'es',
    avalaible: ['en', 'es']
  },
  contact: {
    email: 'barbulina@gmail.com',
    dataSourceLink: 'www.fundaciondiabetes.org',
    dataSourceName: 'Fundación para la Diabetes',
    dataSourceCreator: 'Serafín Murillo'
  }
};

interface Config {
  localStrorageKey: string;
  ui: {
    formArparience: MatFormFieldAppearance;
  };
  language: {
    editable: boolean;
    default: 'en' | 'es';
    avalaible: string[];
  };
  contact: {
    email: string;
    dataSourceLink: string;
    dataSourceName: string;
    dataSourceCreator: string;
  };
}
