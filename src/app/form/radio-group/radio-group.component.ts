import {Component, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadioGroup} from '@shared-app/form/radio-group/radio-group';

@Component({
  selector: 'app-form-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class RadioGroupComponent implements ControlValueAccessor, OnInit {

  @Input() radioGroup: Array<RadioGroup>;

  @Input() type = 'table';

  propagateChange = (_: any) => {};

  public value;

  constructor() {
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  ngOnInit() {
  }

}
