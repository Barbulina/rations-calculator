import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RationListComponent } from './shared/components/ration-list/ration-list.component';
import { RationFormComponent } from './shared/components/ration-form/ration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CONFIG } from './shared/config';
import { BloodGlucoseIndexComponent } from './shared/components/blood-glucose-index/blood-glucose-index.component';
import { BloodGlucoseIndexColorPipe } from './shared/pipes/blood-glucose-index-color.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RationListComponent,
    RationFormComponent,
    BloodGlucoseIndexComponent,
    BloodGlucoseIndexColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: CONFIG.language.default,
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
