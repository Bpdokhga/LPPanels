import { Component, OnInit, Input } from '@angular/core';
import { DataRow } from '../DataRow';
import { TileComponent } from "../tile/tile.component";
import { DataTable } from "../DataTable";

@Component({
  selector: 'lp-twizzle',
  templateUrl: './twizzle.component.html',
  styleUrls: ['./twizzle.component.css']
})
export class TwizzleComponent implements OnInit {

  @Input() title: string;
  @Input() rows: Array<DataRow>;

  @Input() expanded : boolean;
  @Input() hideToggle: boolean;

  // @Input() isHidden: boolean; 
  @Input() disable: boolean =  false;
  @Input() isCheckable: boolean = true;

  constructor() {

  }



  ngOnInit() {
  }

}
