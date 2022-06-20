import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { EMPLOYEES } from './dummy-data-employees';
import Employee from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees():Observable<Employee[]>{
    return of (EMPLOYEES);
  }

  employeeDetails(id: number){
    return this.getEmployees().pipe(
      map((resident: Employee[]) => resident.find((e) => e.id === +id))
    );
  }

}
