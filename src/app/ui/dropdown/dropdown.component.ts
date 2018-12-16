import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class DropdownComponent implements OnInit {

  @Input() classes: string;

  selected = 'option2';

  constructor() { }

  ngOnInit() {
  }

}
