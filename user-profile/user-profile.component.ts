import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '../UserProfile';
import { TablePreferenceComponent } from '../table-preference/table-preference.component';


@Component({
  selector: 'lp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() userProf: UserProfile; 

  constructor() { }

  ngOnInit() {
  }

}
