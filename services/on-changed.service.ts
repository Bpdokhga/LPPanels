import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { DataRow } from "../DataRow";

@Injectable()
export class OnChangedService {

  public changedTile: Subject<DataRow> = new Subject<DataRow>();
  changedTile$ = null;

  constructor() {
    this.changedTile$ = this.changedTile.asObservable();
  }


  CheckBoxChanged(row: DataRow) {
    if (row != null) {
      this.changedTile.next(row);

    }
  }
}
