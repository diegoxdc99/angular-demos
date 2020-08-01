import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conditional-forms',
  templateUrl: './conditional-forms.component.html',
  styleUrls: ['./conditional-forms.component.scss'],
})
export class ConditionalFormsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  private numberValidators = [
    Validators.maxLength(12),
    Validators.minLength(2),
    Validators.pattern(/^[0-9]*$/),
  ];

  numberForm = this.fb.group(
    {
      numberOne: ['', this.numberValidators],
      numberTwo: ['', this.numberValidators],
      numberTree: ['', this.numberValidators],
    },
    {
      validators: [this.minimumOneRequiredField]
    }
  );

  ngOnInit(): void {}

  minimumOneRequiredField(formGroup: FormGroup) {
    const controls = Object.values(formGroup.controls);
    const allEmpty = controls.every(control => !!Validators.required(control));
    return allEmpty ? {
      minimumOneRequiredField: true
    } : null;
  }
}
