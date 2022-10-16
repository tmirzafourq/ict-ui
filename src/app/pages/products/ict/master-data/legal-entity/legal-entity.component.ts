import { Component, OnInit } from '@angular/core';
export interface Color {
  name: string;
  code: string;
}
export interface Make {
  id: number;
  name: string;
}
@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.scss'],
})
export class LegalEntityComponent implements OnInit {
  color: Color[] = [];
  make: Make[] = [];
  make1: Make[] = [];
  data: any[] = [];

  constructor() {
    this.color = [
      { name: 'Black', code: 'BLK' },
      { name: 'Red', code: 'RED' },
      { name: 'Green', code: 'GRN' },
      { name: 'Blue', code: 'BLU' },
    ];
    this.make = [
      { id: 1, name: 'Hyundai' },
      { id: 2, name: 'Toyota' },
      { id: 3, name: 'Mercedes' },
    ];

    this.make1 = [
      { id: 1, name: 'Hyundai' },
      { id: 2, name: 'Toyota' },
      { id: 3, name: 'Mercedes' },
    ];

    this.data = [this.color, this.make1, this.make];
  }

  ngOnInit(): void {}
}
