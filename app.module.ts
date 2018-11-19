import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module/material-module.module';
import { HttpModule } from '@angular/http';
import {CdkAccordion} from '@angular/cdk/accordion';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { Person } from "./Person";

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { TileComponent } from './tile/tile.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


import { SearchService } from './services/search.service';
import { OnChangedService } from './services/on-changed.service';
import { StatusService } from './services/status.service';

import { TwizzleComponent } from './twizzle/twizzle.component';
import { RecordPanelComponent } from './record-panel/record-panel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FieldPreferenceComponent } from './field-preference/field-preference.component';
import { TablePreferenceComponent } from './table-preference/table-preference.component';
import { UserProfileService } from "./services/user-profile.service";
import { InputComboComponent } from './input-combo/input-combo.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    TileComponent,
    BusinessCardComponent,
    DetailsComponent,
    MenuComponent,
    SidePanelComponent,
    SearchBarComponent,
    TwizzleComponent,
    RecordPanelComponent,
    UserProfileComponent,
    FieldPreferenceComponent,
    TablePreferenceComponent,
    InputComboComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatCheckboxModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [SearchService,OnChangedService, StatusService, UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
