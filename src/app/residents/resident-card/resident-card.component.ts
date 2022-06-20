import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Resident from '../Resident';
import { ResidentsService } from 'src/app/residents/residents.service';

@Component({
  selector: 'app-resident-card',
  templateUrl: './resident-card.component.html',
  styleUrls: ['./resident-card.component.css']
})
export class ResidentCardComponent implements OnInit {

  resident:Observable<Resident | undefined> = new Observable;

  constructor(private service: ResidentsService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.residentDetails(String(params.get('id'))))
    );
  }

  getSeniorityYear(num: number): number{
    let currentYear: number = new Date().getFullYear();
    return currentYear - num;
  }

  goBack(){
    this.router.navigate(['/residents']);
  }

}
