import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './common/filter-pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FilterPipe,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
