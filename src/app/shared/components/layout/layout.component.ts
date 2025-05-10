import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  constructor(private router: Router) { }

  @Input() title: string = ''
  @Input() username: string = '';

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  goGroups(): void {
    this.router.navigateByUrl('/groups');
  }

  goResults(): void {
    this.router.navigateByUrl('/result');
  }
  
  goContact(): void {
    this.router.navigateByUrl('/contact');
  }
}
