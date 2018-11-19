import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { MediaMatcher } from '@angular/cdk/layout';
import { Person } from '../Person';
import { SearchService } from "../services/search.service";
import { OnChangedService } from "../services/on-changed.service";
import { DataRow } from "../DataRow";
import { DataTable } from "../DataTable";

@Component({
  selector: 'lp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  queryResults: Array<DataTable> = new Array<DataTable>();


  constructor(private searchService: SearchService) {

    // this.searchService.queryResults$.subscribe(value => {
    //   this.queryResults.push(value);
    //});

  }

  ngOnInit() {
  }
}
