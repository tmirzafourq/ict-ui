import { Component, OnInit } from '@angular/core';

export interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-transfer-pricing',
  templateUrl: './transfer-pricing.component.html',
  styleUrls: ['./transfer-pricing.component.scss'],
})
export class TransferPricingComponent implements OnInit {
  cities: City[] = [];
  data: any[] = [];
  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.data = [this.cities];
  }

  ngOnInit(): void {}
}
