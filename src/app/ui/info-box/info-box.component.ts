import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() type = 'default';

  @Input() icon: string;

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
