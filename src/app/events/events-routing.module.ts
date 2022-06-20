import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsTableComponent } from './events-table/events-table.component';

const routes: Routes = [
  { path: 'events', component: EventsTableComponent },
  { path: 'event/:code', component: EventDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
