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

  goBack(): void {
    this.router.navigateByUrl('');
  }
}
