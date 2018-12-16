import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Match} from '@shared-app/form/validators/match';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {


  registerForm: FormGroup;

  public checked = true;

  public unchecked: boolean;

  public radioValue = 'a1';

  public inputVal = 'Test';

  public submitted = false;

  public boxText = `This is the third article of a three-part series.`;

  public testRadioGroup = [
    {value: 'a1', text: `<i class="fab fa-cc-visa mr-2"></i> <span class="color-red">CARD</span>`},
    {value: 'a2', text: 'test2'},
    {value: 'a3',  text: 'test2'},
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: Match('password', 'confirmPassword')
    });
  }

  onSubmit() {
    console.log('submit');
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

}
