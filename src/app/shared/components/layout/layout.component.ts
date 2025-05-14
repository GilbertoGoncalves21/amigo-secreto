import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isMobile: boolean = window.innerWidth < 1000;

  constructor(private router: Router) { }

  @Input() page: string = '/home';
  @Input() username: string = '';

  goHome(): void {
    this.router.navigateByUrl(this.page);
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

  backToHome(): void {
    this.router.navigateByUrl(this.page);
  }
}
