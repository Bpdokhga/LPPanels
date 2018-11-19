import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { MenuComponent } from '../menu/menu.component';
import { DataRow } from "../DataRow";


@Component({
  selector: 'lp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input() dataRow: DataRow;

  constructor() {
  }

  ngOnInit() {
  }

}
