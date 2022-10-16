import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ict-ui';

  isSideNavCollpased = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollpased = data.collapsed;
  }

  currentDate: string;

  constructor() {}

  ngOnInit(): void {
    this.currentDate = new Date().toDateString();
  }
}
