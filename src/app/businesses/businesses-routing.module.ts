import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesTableComponent } from './businesses-table/businesses-table.component';

const routes: Routes = [
  {path: 'businesses', component: BusinessesTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessesRoutingModule { }
