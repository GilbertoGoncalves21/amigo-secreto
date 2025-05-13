import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPTY } from 'src/app/shared';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  private readonly _title: string = 'Gilberto';
  private _form: FormGroup;

  constructor(private fb: FormBuilder) {
    this._form = this.fb.group({
      formControlName: [EMPTY, Validators.required],
    });
   }

  get title(): string {
    return this._title;
  }

  get form(): FormGroup {
    return this._form;
  }

  get result(): string {
    return this._form.get('formControlName')?.value;
  }
  
  reviewSecretFriend() {
    // Logic to review the secret friend
    console.log('Reviewing secret friend...');
  }
}
