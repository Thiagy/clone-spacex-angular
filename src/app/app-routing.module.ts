import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { Falcon9Component } from './components/falcon9/falcon9.component';
import { HumanspaceflightComponent } from './components/humanspaceflight/humanspaceflight.component';
import { DragonComponent } from './components/dragon/dragon.component';

const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'falcon-9', component: Falcon9Component},
  {path: 'humanspaceflight', component: HumanspaceflightComponent},
  {path: 'dragon', component: DragonComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
