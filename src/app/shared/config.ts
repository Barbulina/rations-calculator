import { MatFormFieldAppearance } from '@angular/material/form-field';

export const CONFIG: Config = {
  localStrorageKey: 'ration-list',
  ui: {
    formArparience: 'legacy'
  },
  language: {
    default: 'es',
    avalaible: ['en', 'es']
  }
};

interface Config {
  localStrorageKey: string;
  ui: {
    formArparience: MatFormFieldAppearance;
  };
  language: {
    default: 'en' | 'es';
    avalaible: string[];
  };
}
