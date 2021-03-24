import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper with editable steps
 */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
