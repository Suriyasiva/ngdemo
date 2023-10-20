import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-mat-app-input',
  templateUrl: './mat-app-input.component.html',
  styleUrls: ['./mat-app-input.component.css'],
})
export class MatAppInputComponent implements ControlValueAccessor {
  @Input() input: any;

  @Input() name: any = '';

  @Input() type: any = '';

  @Input() placeHolder: any = '';

  @Input() label: any = '';

  // @Input() errorMessage:any='';

  @Input() formControlName: any = '';

  onChange = (data: any) => {};

  onTouch = (data: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.input = value;

    this.onChange(value);
  }
}
