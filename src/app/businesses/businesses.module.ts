import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesTableComponent } from './businesses-table/businesses-table.component';


@NgModule({
  declarations: [
    BusinessesTableComponent
  ],
  imports: [
    CommonModule,
    BusinessesRoutingModule
  ]
})
export class BusinessesModule { }
