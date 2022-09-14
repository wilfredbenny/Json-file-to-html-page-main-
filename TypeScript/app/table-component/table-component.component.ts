import { Component, OnInit } from '@angular/core';
import jsonFile from '../data/1.json';
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  jsonData: any;
  constructor() {}

  ngOnInit(): void {
    this.jsonData = jsonFile
  }
}
