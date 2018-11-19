import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { DataRow } from "../DataRow";
import { DataColumn } from "../DataColumn";
import { DataTable } from "../DataTable";

import { UserProfileService } from "./user-profile.service";
import { UserProfile } from "../UserProfile";

@Injectable()
export class SearchService {

  public queryResults: Subject<DataTable> = new Subject<DataTable>();
  queryResults$ = null;

  public searchStarted: Subject<boolean> = new Subject<boolean>();
  searchStarted$ = null;

  userProfile: UserProfile = new UserProfile();


  constructor(private userProfileService: UserProfileService) {
    this.queryResults$ = this.queryResults.asObservable();
    this.searchStarted$ = this.searchStarted.asObservable();

    // UserProfile Service
    this.userProfileService.userProfile$.subscribe(value => {
      this.userProfile.username = value.username;
      this.userProfile.password = value.password;
      this.userProfile.tablePrefs = value.tablePrefs;
    });
  }

  generateId(): number {
    return Math.random() * 5;
  }

  Query(hint: string) {

    this.searchStarted.next(true);

    if (hint == null || hint == "") {
      let table = new DataTable();

      let row = table.NewRow();
      row.setValue("Name", "Alan Allred " + hint)
      row.setValue("Id", "003xxxxxxxxx");
      row.id = this.generateId().toString();
      row.setValue("AccountId", "001xxxxxxxxx");
      row.setValue("AccountName", "nth Degree Systems");
      row.setValue("AccountSite", "1234");
      row.setValue("Email", "red@linkpoint360.com");
      table.AddRow(row);


      this.queryResults.next(table);
    }
    else {

      let table = new DataTable();
      table.name = "Contact";
      table.columns.push(new DataColumn("Name", "First Name", false));
      table.columns.push(new DataColumn("AccountName", "Account", false));
      table.columns.push(new DataColumn("Email", "Email Address", false));
      table.columns.push(new DataColumn("Id", "Id", false));

      let row = table.NewRow();
      row.setValue("Name", "Alan Allred " + hint);

      row.setValue("Id", "003xxxxxxxxx");
      row.id = this.generateId().toString();
      row.setValue("AccountId", "001xxxxxxxxx");
      row.setValue("AccountName", "nth Degree Systems");
      row.setValue("AccountSite", "1234");
      row.setValue("Email", "red@linkpoint360.com");
      table.AddRow(row);

      row = table.NewRow();
      row.setValue("Name", "Richard Bluebarn " + hint);
      row.setValue("Id", "003xxxxxxxxx");
      row.id = this.generateId().toString();
      row.setValue("AccountId", "001xxxxxxxxx");
      row.setValue("AccountName", "nth Degree Systems");
      row.setValue("AccountSite", "1234");
      row.setValue("Email", "blue@linkpoint360.com");
      table.AddRow(row);
      this.ApplyUserPrefs(table);

      this.queryResults.next(table);

      table = new DataTable();
      table.name = "Opportunity";
      table.columns.push(new DataColumn("Name", "First Name", false));
      table.columns.push(new DataColumn("OpportunityName", "Opportunity", false));
      table.columns.push(new DataColumn("Email", "Email Address", false));
      table.columns.push(new DataColumn("Id", "Id", false));
      row = table.NewRow();

      row.setValue("Name", "Rounded squares" + hint);
      row.setValue("OpportunityName", "nth Degree Systems");
      row.setValue("Email", "blue@xyz.com");

      table.AddRow(row);

      this.queryResults.next(table);
    }
  }

  ApplyUserPrefs(table: DataTable) {
    this.userProfile.tablePrefs.forEach(element => {
      if(this.UserProfileContainsTable(table.name)){
        
      }
    });
  }

  UserProfileContainsTable(tableName: string): boolean {
    for (let table of this.userProfile.tablePrefs) {
      if (table.name == tableName){
        return true;
      }
      else {
        return false;
      }
    }
  }
}
