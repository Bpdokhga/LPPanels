import { Component, OnInit, Input } from '@angular/core';
import { FieldPreferenceComponent } from '../field-preference/field-preference.component';
import { TablePref } from '../TablePref';

@Component({
  selector: 'lp-table-preference',
  templateUrl: './table-preference.component.html',
  styleUrls: ['./table-preference.component.css']
})
export class TablePreferenceComponent implements OnInit {

  @Input() tablePref: TablePref;

  constructor() { }

  ngOnInit() {
  }

}
