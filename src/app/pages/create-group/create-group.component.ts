import { Component } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent {
  private readonly _title: string = 'Criar um grupo';

  constructor() {}

  get title(): string {
    return this._title;
  }
}
