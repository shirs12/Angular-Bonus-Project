import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentCardComponent } from './resident-card/resident-card.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';

const routes: Routes = [
  {path: 'residents', component: ResidentsListComponent},
  {path: 'resident/:id', component: ResidentCardComponent},
  {path: 'teachers', component: ResidentsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentsRoutingModule { }
