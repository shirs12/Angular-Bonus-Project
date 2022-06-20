import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentCardComponent } from './resident-card/resident-card.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResidentCardComponent,
    ResidentsListComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    FormsModule
  ]
})
export class ResidentsModule { }
