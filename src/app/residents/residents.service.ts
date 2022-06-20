import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { RESIDENTS } from './dummy-data-residents';
import Resident from './Resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  constructor() { }

  getResidents():Observable<Resident[]>{
    return of (RESIDENTS);
  }

  residentDetails(id: string){
    return this.getResidents().pipe(
      map((resident: Resident[]) => resident.find((r) => r.id === +id))
    );
  }

  getSeniorityYear(num: number): number{
    let currentYear: number = new Date().getFullYear();
    return currentYear - num;
  }

}
