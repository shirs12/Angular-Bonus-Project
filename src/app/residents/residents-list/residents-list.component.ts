import { Component, OnInit } from '@angular/core';
import Resident from '../Resident';
import { ResidentsService } from '../residents.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.css']
})
export class ResidentsListComponent implements OnInit {

  residents: Resident[] = [];

  constructor(private service: ResidentsService, private router: Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getResidents();
  }

  getResidents(): void {
    this.service.getResidents().subscribe((res) => (this.residents = res));
  }

  residentDetails(id: string): Resident | undefined {
    let result: Resident | undefined;
    this.service.residentDetails(id).subscribe((res) => (result = res));
    return result;
  }

  getSeniorityYear(num: number): number{
    let currentYear: number = new Date().getFullYear();
    return currentYear - num;
  }

  // goBack(){
  //   this.router.navigate(['/residents']);
  // }

}
