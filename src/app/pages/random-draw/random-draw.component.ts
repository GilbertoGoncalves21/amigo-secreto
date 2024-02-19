import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-random-draw',
  templateUrl: './random-draw.component.html',
  styleUrls: ['./random-draw.component.scss']
})
export class RandomDrawComponent {
  participantsForm: FormGroup;

  constructor() {
    this.participantsForm = new FormGroup({
      participants: new FormControl('')
    });
  }

  performDraw() {
    const participantsValue = this.participantsForm.get('participants')?.value;
    // Implemente sua lógica de sorteio aqui
    console.log(participantsValue);
  }
}
