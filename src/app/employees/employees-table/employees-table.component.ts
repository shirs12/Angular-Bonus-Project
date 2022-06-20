import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Employee from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private service: EmployeesService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.service.getEmployees().subscribe((e) => (this.employees = e));
  }

}
