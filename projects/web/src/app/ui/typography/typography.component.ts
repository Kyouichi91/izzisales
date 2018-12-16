import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  public text1 = `One of the earliest activities we engaged in when we first got into astronomy
    is the same one we like to show our children
    just as soon as their excitement about the night sky begins to surface.`;

  public text2 = `That is the fun of finding constellations. But finding constellations and
   using them to navigate the sky is a discipline that goes back virtually to the dawn of man
   . In fact, we have cave pictures to show that the more primitive of human societies could
    “see pictures” in the sky and ascribe to them significance.`;

  constructor() {
  }

  ngOnInit() {
  }

}
