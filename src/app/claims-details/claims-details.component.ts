import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-claims-details',
  template: `<h3>Claim Details for ID: {{ claimId }}</h3>`,
  templateUrl: './claims-details.component.html',
  styleUrls: ['./claims-details.component.css']
})
export class ClaimsDetailsComponent implements OnInit {
  claimId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the claim ID from the route parameters
    this.claimId = this.route.snapshot.paramMap.get('id');
    console.log('Claim ID:', this.claimId);
    // Fetch the details of the claim using this.claimId if necessary
  }
}
