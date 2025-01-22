import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  private readonly _title: string = 'Ver Resultado'

  constructor() { }

  get title(): string {
    return this._title;
  }
}
