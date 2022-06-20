import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventsService } from '../events.service';
import Event from '../Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Observable<Event | undefined> = new Observable();

  constructor(private route: ActivatedRoute, private router: Router, private service: EventsService) { }

  ngOnInit(): void {
    this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.eventDetails(Number(params.get('code'))))
    );
  }

  goBack() {
    this.router.navigate(['/events']);
  }

}
