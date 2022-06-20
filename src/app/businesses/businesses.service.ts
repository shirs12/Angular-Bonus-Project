import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { BUSINESSES } from './dummy-data-businesses';
import Business from './Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  constructor() { }

  getBusinesses():Observable<Business[]>{
    return of (BUSINESSES);
  }

  businessDetails(businessNum: number){
    return this.getBusinesses().pipe(
      map((business: Business[]) => business.find((b) => b.businessNum === +businessNum))
    );
  }

}
