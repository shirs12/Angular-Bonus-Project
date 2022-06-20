import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import Event from './Event';
import { EVENTS } from './dummy-data-events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents():Observable<Event[]>{
    return of (EVENTS);
  }

  eventDetails(code: number){
    return this.getEvents().pipe(
      map((eventM: Event[]) => eventM.find((e) => e.code === +code))
    );
  }

}
