import { Component, OnInit, Input } from '@angular/core';

import { DataRow } from "../DataRow";

@Component({
  selector: 'lp-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() dataRows: Array<DataRow> = new Array<DataRow>();

  constructor() {

  }

  ngOnInit() {
  }
}

