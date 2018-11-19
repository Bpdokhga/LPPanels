import { Component, OnInit, Input } from '@angular/core';
import { FieldPref } from '../FieldPref';

@Component({
  selector: 'lp-field-preference',
  templateUrl: './field-preference.component.html',
  styleUrls: ['./field-preference.component.css']
})
export class FieldPreferenceComponent implements OnInit {

  @Input() fieldPref: FieldPref;

  constructor() { }

  ngOnInit() {

  }

}
