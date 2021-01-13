import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDealerInfoDataComponent } from './dealerServiceInfo/list-dealer-info-data/list-dealer-info-data.component';
import { LandingPageComponent } from './search/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'search', component: LandingPageComponent},
  {path: 'listDealerServiceInfoPage', component: ListDealerInfoDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
