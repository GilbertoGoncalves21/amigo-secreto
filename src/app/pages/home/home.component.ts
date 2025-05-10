import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _username: string = 'Gilbert';

  constructor(private router: Router) { }

  get username() {
    return this._username;
  }

  navigateToGroup() {
    this.router.navigate(['/groups']);
  }
  
  navigateToResults() {
    this.router.navigate(['/result']);
  }
}
