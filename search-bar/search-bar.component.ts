import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service";
import { StatusService } from '../services/status.service';
import { StatusServicePacket } from "../StatusServicePacket";

@Component({
  selector: 'lp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  

  // Search Hint
  private _searchHint: string = "";
  get searchHint(): string {
    return this._searchHint;
  }
  set searchHint(value: string) {
    this._searchHint = value;
  }

  // SearchStarted
  private _searchStarted: boolean = false;
  get searchStarted(): boolean {
    return this._searchStarted;
  }
  set searchStarted(value: boolean) {
    this._searchStarted = value;
  } 

  startSearch($event) {
    //this.searchService.searchStarted$ = true; 
    
    let packet = new StatusServicePacket("Search started", true);
    this.statusService.Status(packet);
    this.searchService.Query(this.searchHint);
  }

  onEnter($event) {
    console.log(this.searchHint);
    this.searchService.Query(this.searchHint);
  }

  constructor(private searchService: SearchService,
    private statusService: StatusService){
    //  {
    //   this.statusService.statusChange$.subscribe(value => {
    //     this.packet = value;
    //   });
  }

  ngOnInit() {
  }

}
