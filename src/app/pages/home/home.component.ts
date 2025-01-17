import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router: Router) { }

  createGroup() {
    this.router.navigateByUrl('/create-group');
  }

  viewResult() {
    this.router.navigateByUrl('/result');
  }
}
