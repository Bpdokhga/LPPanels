import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service";
import { OnChangedService } from "../services/on-changed.service";
import { StatusService } from "../services/status.service";
import { DataTable } from "../DataTable";
import { DataRow } from "../DataRow";
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { EmailPouch } from "../EmailPouch";
import { UserProfile } from '../UserProfile';
import { TablePref } from '../TablePref';
import { FieldPref } from '../FieldPref';
import { DataColumn } from "../DataColumn";
import { UserProfileService } from "../services/user-profile.service";

@Component({
  selector: 'lp-record-panel',
  templateUrl: './record-panel.component.html',
  styleUrls: ['./record-panel.component.css']
})
export class RecordPanelComponent implements OnInit {

  queryResults: Array<DataRow> = new Array<DataRow>();
  selections: Array<DataRow> = new Array<DataRow>();
  changedTile: DataRow;
  status: string;
  emailPouch: EmailPouch = new EmailPouch();
  attachments: Array<DataRow> = new Array<DataRow>();
  orphans: DataTable = new DataTable();

  rightIsOpen: boolean = false;
  leftIsOpen: boolean = false;

  isAttachmentsEmpty: boolean;
  isOrphansEmpty: boolean;

  userProfile: UserProfile = new UserProfile();
  tablePref: TablePref = new TablePref();
  fieldPref: FieldPref = new FieldPref();
  tablePrefs: Array<TablePref> = new Array<TablePref>();
  fieldPrefs: Array<FieldPref> = new Array<FieldPref>();

  private _panelMode: number = -1;
  get panelMode(): number {
    return this._panelMode;
  }
  set panelMode(value: number) {
    //console.log(value);
    this._panelMode = value;

    if (this._panelMode == 0) {
      this.leftIsOpen = false;
      this.rightIsOpen = false;

    } else if (this._panelMode == 1) {
      this.leftIsOpen = !this.leftIsOpen;
      this.rightIsOpen = false;

    } else if (this._panelMode == 2) {
      this.leftIsOpen = false;
      this.rightIsOpen = !this.rightIsOpen;

    } else if (this._panelMode == 3) {
      this.leftIsOpen = false;
      this.rightIsOpen = !this.rightIsOpen;
    }
    else {
      this.leftIsOpen = false;
      this.rightIsOpen = !this.rightIsOpen;
    }
  }


  constructor(private searchService: SearchService,
    private onChangedService: OnChangedService,
    private userProfileService: UserProfileService) {

    this.emailPouch.to.push("BrandonDokhgan@gmail.com");
    this.emailPouch.from = "Allan Alred";
    this.emailPouch.cc.push("RichardBluebarn@gmail.com");
    this.emailPouch.bcc.push("AllanAlred@gmail.com");
    this.emailPouch.subject = "New Side Panle";
    this.emailPouch.body = "New side panle looks great.";
    this.emailPouch.attachments.push("File");
    this.emailPouch.attachments.push("Photo ");
    this.loadAttachments();
    this.loadOrphans();

    this.tablePref.name = "Contacts";
    this.tablePref.hidden = false;
    this.tablePref.collapsable = true;

    this.fieldPref.name = "Contact_Name"
    this.fieldPref.hidden = false;
    this.fieldPrefs.push(this.fieldPref);

    this.tablePref.fieldPreferences = this.fieldPrefs;

    this.tablePrefs.push(this.tablePref);

    this.userProfile.username = "Brandon Dokhgan";
    this.userProfile.password = "64awhite";
    this.userProfile.tablePrefs = this.tablePrefs;

    // Search Service
    this.searchService.searchStarted$.subscribe(value => {
      this.queryResults = new Array<DataRow>();
    });

    this.searchService.queryResults$.subscribe(value => {
      for (let row of value.rows) {
        this.queryResults.push(row);
      }
    });

    // OnChanged Service --- selection
    this.onChangedService.changedTile$.subscribe(value => {
      this.moveit(value);
    });

    // UserProfile Service
    this.userProfileService.userProfile$.subscribe(value => {
      this.userProfile = new UserProfile();
    });
  }


  checkForOrphans() {
    if (this.orphans.rows.length == 0) {
      this.isOrphansEmpty = true;
    } else {
      this.orphans.rows.forEach(element => {
        for (let row of this.queryResults) {
          if (row.getValue("EmailAddress") != element.getValue("EmailAddress")) {
            delete this.orphans[element.getValue("EmailAddress")];
          }
        }
      });
    }
  }

  moveit(value: DataRow) {
    if (value.isSelected) {
      // move from search to selections
      this.selections.push(value);
    }
    else {
      let i = this.selections.indexOf(value);
      if (i > -1)
        this.selections.splice(i, 1);

      let buffer = this.queryResults.find(x => x.id === value.id);
      if (buffer == null) {
        this.queryResults.push(value);
      }

    }
  }

  loadAttachments() {
    // this.emailPouch.attachments.forEach(attachment => {
    //   let row = new DataRow();
    //   row.setValue(attachment, attachment);
    //   this.attachments.push(row);
    //});
  }

  loadOrphans() {
    this.orphans = new DataTable();
    this.orphans.columns.push(new DataColumn("EmailAddress", "Email Address", false));

    this.emailPouch.to.forEach(element => {
      let row = this.orphans.NewRow();
      row.setValue("EmailAddress", element);
      this.orphans.rows.push(row);
    });
    this.emailPouch.cc.forEach(element => {
      let row = this.orphans.NewRow();
      row.setValue("EmailAddress", element);
      this.orphans.rows.push(row);
    })
    this.emailPouch.bcc.forEach(element => {
      let row = this.orphans.NewRow();
      row.setValue("EmailAddress", element);
      this.orphans.rows.push(row);
    })
  }

  ngOnInit() {
  }
}
