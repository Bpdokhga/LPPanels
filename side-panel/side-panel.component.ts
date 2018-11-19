import { Component, OnInit } from '@angular/core';
import { DataRow } from "../DataRow";

@Component({
  selector: 'lp-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor() { }


  data :  Array<DataRow>

  ngOnInit() {


  }

}
