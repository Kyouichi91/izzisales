import {Component, forwardRef, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-form-round-checkbox',
  templateUrl: './round-checkbox.component.html',
  styleUrls: ['./round-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoundCheckboxComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.Native
})
export class RoundCheckboxComponent implements OnInit, ControlValueAccessor {

  public model;

  propagateChange = (_: any) => {};

  constructor() {
  }

  writeValue(value: any) {
    this.model = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  ngOnInit() {
  }

}
