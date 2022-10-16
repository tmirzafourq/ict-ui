import { Component, OnInit } from '@angular/core';
export interface ScreenSize {
  name: string;
}
export interface Company {
  name: string;
}
@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
})
export class PartsComponent implements OnInit {
  screen_size: ScreenSize[] = [];
  company: Company[] = [];
  data: any[] = [];

  constructor() {
    this.screen_size = [
      { name: '15 inches' },
      { name: '10 inches' },
      { name: '12 Inches' },
    ];
    this.company = [{ name: 'Samsung' }, { name: 'Apple' }, { name: 'Moto' }];
    this.data = [this.screen_size, this.company];
  }

  ngOnInit(): void {}
}
