import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './search/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { SearchFormComponent } from './dealerServiceInfo/search-form/search-form.component';
import { ShowErrorsComponent } from './utilities/show-errors/show-errors.component';
import { ListDealerInfoDataComponent } from './dealerServiceInfo/list-dealer-info-data/list-dealer-info-data.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    SearchFormComponent,
    ShowErrorsComponent,
    ListDealerInfoDataComponent,
    GenericListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
