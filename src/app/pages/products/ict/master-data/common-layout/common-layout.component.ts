import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  @Input() headerName: string;
  @Input() data: any[];

  cities: any = [];

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  columnDefs = [
    {
      headerName: 'Article ID',
      field: 'articleid',
      sortable: true,
      filter: true,
    },
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    {
      headerName: 'Contributor',
      field: 'contributor',
      sortable: true,
      filter: true,
    },
  ];

  rowData: any = { name: '', groupId: 0 };

  constructor(private _http: HttpClient) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.rowData = this._http.get(
      'https://obscure-tundra-38074.herokuapp.com/api/articles'
    );
  }

  ngOnInit(): void {}
}
