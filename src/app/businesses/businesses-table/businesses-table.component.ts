import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Business from '../Business';
import { BusinessesService } from '../businesses.service';

@Component({
  selector: 'app-businesses-table',
  templateUrl: './businesses-table.component.html',
  styleUrls: ['./businesses-table.component.css']
})
export class BusinessesTableComponent implements OnInit {
  businesses:Business[] = [];

  constructor(private service: BusinessesService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBusinesses();
  }

  getBusinesses(): void {
    this.service.getBusinesses().subscribe((b) => (this.businesses = b));
  }

}
