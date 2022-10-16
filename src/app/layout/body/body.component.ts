import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() {}

  ngOnInit(): void {}

  getBodyClass(): string {
    let styeClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styeClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styeClass = 'body-md-screen';
    }
    return styeClass;
  }
}
