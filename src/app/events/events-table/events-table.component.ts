import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import Event from '../Event';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {
  events: Event[] = [];

  constructor(private service: EventsService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.service.getEvents().subscribe((events) => (this.events = events));
  }

  eventDetails(code: number): Event | undefined {
    let result: Event | undefined;
    this.service.eventDetails(code).subscribe((event) => (result = event));
    return result;
  }

  // goBack(){
  //   this.router.navigate(['/']);
  // }

}
