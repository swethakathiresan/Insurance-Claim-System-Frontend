// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-policyuser',
//   templateUrl: './policyuser.component.html',
//   styleUrls: ['./policyuser.component.css'],
// })
// export class PolicyuserComponent {
//   view: string = 'dashboard'; // Default view
//   activePolicies = [
//     { policyNumber: 'P123456', status: 'Active' },
//     { policyNumber: 'P654321', status: 'Active' },
//   ];

//   claim = {
//     policyNumber: '',
//     details: '',
//   };

//   claimHistory = [
//     { claimId: 'C001', details: 'Medical Expenses', status: 'Approved' },
//     { claimId: 'C002', details: 'Car Repair', status: 'Pending' },
//   ];

//   setView(view: string) {
//     this.view = view;
//   }

//   submitClaim() {
//     alert('Claim submitted successfully!');
//     // Add the new claim to history (for demo purposes)
//     this.claimHistory.push({
//       claimId: `C${this.claimHistory.length + 1}`,
//       details: this.claim.details,
//       status: 'Pending',
//     });
//     this.claim = { policyNumber: '', details: '' }; // Reset form
//   }

//   uploadFiles(event: any) {
//     console.log('Files uploaded:', event.target.files);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-policyuser',
//   templateUrl: './policyuser.component.html',
//   styleUrls: ['./policyuser.component.css'],
// })
// export class PolicyuserComponent implements OnInit {
//   view: string = 'dashboard'; // Default view
//   activePolicies: any[] = [];
//   claimHistory: any[] = [];
//   claim = {
//     policyNumber: '',
//     details: '',
//   };
//   userName: string = ''; // To store the logged-in user's name
//   userId: string = ''; // To store the logged-in user's ID

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     // Retrieve user details from localStorage
//     this.userName = localStorage.getItem('userName') || 'Guest'; // Default to 'Guest' if not found
//     this.userId = localStorage.getItem('userId') || ''; // Default to empty string if not found

//     // Check if userId is missing and handle the error
//     if (!this.userId) {
//       console.error('User ID not found. Please log in again.');
//       alert('User ID not found. Please log in again.');
//       // You can redirect the user to the login page or take appropriate action
//       return;
//     }

//     // Fetch data
//     this.fetchActivePolicies();
//     this.fetchClaimHistory();
//   }

//   fetchActivePolicies() {
//     if (!this.userId) {
//       console.error('User ID not found. Unable to fetch policies.');
//       return;
//     }

//     // Make sure the userId is valid before making the request
//     this.http.get<any[]>(`http://localhost:3000/api/policies/${this.userId}`).subscribe({
//       next: (policies) => {
//         this.activePolicies = policies;
//       },
//       error: (err) => {
//         console.error('Error fetching active policies:', err);
//       },
//     });
//   }

//   fetchClaimHistory() {
//     if (!this.userId) {
//       console.error('User ID not found. Unable to fetch claim history.');
//       return;
//     }

//     // Make sure the userId is valid before making the request
//     this.http.get<any[]>(`http://localhost:3000/api/claims/${this.userId}`).subscribe({
//       next: (claims) => {
//         this.claimHistory = claims;
//       },
//       error: (err) => {
//         console.error('Error fetching claim history:', err);
//       },
//     });
//   }

//   setView(view: string) {
//     this.view = view;
//   }

//   submitClaim() {
//     if (!this.userId) {
//       console.error('User ID not found. Unable to submit claim.');
//       return;
//     }

//     const claimData = {
//       userId: this.userId,
//       policyNumber: this.claim.policyNumber,
//       details: this.claim.details,
//     };

//     this.http.post(`http://localhost:3000/api/claims`, claimData).subscribe({
//       next: () => {
//         alert('Claim submitted successfully!');
//         this.fetchClaimHistory(); // Refresh claim history
//         this.claim = { policyNumber: '', details: '' }; // Reset the form
//       },
//       error: (err) => {
//         console.error('Error submitting claim:', err);
//       },
//     });
//   }

//   uploadFiles(event: any) {
//     console.log('Files uploaded:', event.target.files);
//     // Additional file upload logic can be implemented here
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-policyuser',
//   templateUrl: './policyuser.component.html',
//   styleUrls: ['./policyuser.component.css'],
// })
// export class PolicyuserComponent implements OnInit {
//   view: string = 'dashboard'; 
//   activePolicies: any[] = [];
//   claimHistory: any[] = [];
//   claim = {
//     policyNumber: '',
//     details: '',
//   };
//   userName: string = ''; 
//   userId: string = ''; 
//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit() {
//     this.fetchUserDetails();
//   }

//   fetchUserDetails() {
//     this.http.get<any>('http://localhost:3000/api/users/details').subscribe({
//       next: (user) => {
//         this.userName = user.name;
//         this.userId = user.id;

//         this.fetchActivePolicies();
//         this.fetchClaimHistory();
//       },
//       error: (err) => {
//         console.error('Error fetching user details:', err);
//         alert('Unable to fetch user details. Please log in again.');
//         this.router.navigate(['/']);
//       },
//     });
//   }

//   fetchActivePolicies() {
//     this.http
//       .get<any[]>(`http://localhost:3000/policies/${this.userId}`)
//       .subscribe({
//         next: (policies) => {
//           this.activePolicies = policies;
//         },
//         error: (err) => {
//           console.error('Error fetching active policies:', err);
//         },
//       });
//   }

//   fetchClaimHistory() {
//     this.http
//       .get<any[]>(`http://localhost:3000/claims/user/${this.userId}`)
//       .subscribe({
//         next: (claims) => {
//           this.claimHistory = claims;
//         },
//         error: (err) => {
//           console.error('Error fetching claim history:', err);
//         },
//       });
//   }

//   setView(view: string) {
//     this.view = view;
//   }

//   submitClaim() {
//     const claimData = {
//       userId: this.userId,                          // Number
//       policyNumber: this.claim.policyNumber,        // String
//       claimType: 'Accident',                        // Example value, adjust as needed
//       amountRequested: 5000,                        // Example value, replace with user input if necessary
//       details: this.claim.details,                  // String
//       documents: 'document_url_or_path',
//     };

//     this.http.post('http://localhost:3000/claims/new-user', claimData).subscribe({
//       next: () => {
//         alert('Claim submitted successfully!');
//         this.fetchClaimHistory(); // Refresh claim history
//         this.claim = { policyNumber: '', details: '' }; // Reset the form
//       },
//       error: (err) => {
//         console.error('Error submitting claim:', err);
//       },
//     });
//   }

//   uploadFiles(event: any) {
//     console.log('Files uploaded:', event.target.files);
//     // Additional fi
//     // le upload logic can be implemented here
//   }

//   logout() {
//     // Clear user session data
//     localStorage.removeItem('userToken'); // Replace with actual storage key
//     localStorage.removeItem('userId');    // Clear userId from local storage

//     // Navigate back to the home or login page
//     this.router.navigate(['/']);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policyuser',
  templateUrl: './policyuser.component.html',
  styleUrls: ['./policyuser.component.css'],
})
export class PolicyuserComponent implements OnInit {
  view: string = 'dashboard';
  activePolicies: any[] = [];
  claimHistory: any[] = [];
  claim = {
    policyNumber: '',
    claimType: '', // New field for claim type
    amountRequested: 0, // New field for amount requested
    details: '',
  };
  
  userName: string = '';
  userId: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.http.get<any>('http://localhost:3000/api/users/details').subscribe({
      next: (user) => {
        this.userName = user.name;
        this.userId = user.user_id;

        this.fetchActivePolicies();
        this.fetchClaimHistory();
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
        alert('Unable to fetch user details. Please log in again.');
        this.router.navigate(['/']);
      },
    });
  }

  fetchActivePolicies() {
    if (this.userId === null) return;
    this.http.get<any[]>(`http://localhost:3000/policies/${this.userId}`).subscribe({
      next: (policies) => {
        this.activePolicies = policies;
      },
      error: (err) => {
        console.error('Error fetching active policies:', err);
      },
    });
  }

  fetchClaimHistory() {
    if (this.userId === null) return;
    
    this.http.get<any[]>(`http://localhost:3000/claims/user/${this.userId}`).subscribe({
      next: (claims) => {
      if (claims.length === 0) {
        console.warn('No claims found for the user.'); // Debug log
      }
      this.claimHistory = claims; // Update the claimHistory
    },
      error: (err) => {
        console.error('Error fetching claim history:', err);
      },
    });
  }
  

  setView(view: string) {
    this.view = view;
  }

  submitClaim() {
    if (this.userId === null) return;
  
    const claimData = {
      userId: this.userId,
      policyNumber: this.claim.policyNumber,
      claimType: this.claim.claimType, // Get user-entered claim type
      amountRequested: this.claim.amountRequested, // Get user-entered amount
      details: this.claim.details,
      documents: 'document_url_or_path',
    };
  
    this.http.post('http://localhost:3000/claims/new-user', claimData).subscribe({
      next: () => {
        alert('Claim submitted successfully!');
        this.fetchClaimHistory();
        this.claim = { policyNumber: '', claimType: '', amountRequested: 0, details: '' }; // Reset fields
      },
      error: (err) => {
        console.error('Error submitting claim:', err);
      },
    });
  }
  

  uploadFiles(event: any) {
    console.log('Files uploaded:', event.target.files);
    // Additional file upload logic
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }
}
