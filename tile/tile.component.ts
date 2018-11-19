import { Component, OnInit, Input } from '@angular/core';

import { DataRow } from "../DataRow";
import { OnChangedService } from "../services/on-changed.service";

@Component({
  selector: 'lp-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() dataRow: DataRow;
  @Input() hideCheckbox: boolean;
  @Input() isCheckable: boolean = true;
  // get isCheckable(): boolean {
  //   return this._isCheckable;
  // }
  // set isCheckable(value: boolean ){
  //   this._isCheckable = value;
  //   if (this.isCheckable) {

  //   }
  // }

  constructor(private onChangedService: OnChangedService) {
    this.onChangedService.changedTile$.subscribe(value => {
    });
  }
  ngOnInit() {
  }


  get isChecked(): boolean {
    return this.dataRow.isSelected;
  }
  set isChecked(value: boolean) {
    if (value != this.dataRow.isSelected) {
      this.dataRow.isSelected = value;
      this.onChangedService.CheckBoxChanged(this.dataRow);
    }
  }

}
