import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent {
  claims = [
    { id: 1, type: 'Health', status: 'Pending', date: '2024-12-01' },
    { id: 2, type: 'Car', status: 'Approved', date: '2024-12-15' },
    { id: 3, type: 'Life', status: 'Rejected', date: '2024-12-20' }
  ];

  constructor(private router: Router) {}

  viewClaim(id: number): void {
    this.router.navigate(['/claims', id]);
  }
}
