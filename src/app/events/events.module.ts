import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsTableComponent } from './events-table/events-table.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventsTableComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule
  ]
})
export class EventsModule { }
