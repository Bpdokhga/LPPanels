import { Injectable } from '@angular/core';
import { UserProfile} from '../UserProfile';
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserProfileService {

  public userProfile: Subject<UserProfile> = new Subject<UserProfile>();
  userProfile$ = null;

  constructor() { 
    this.userProfile$ = this.userProfile.asObservable();
  }

  

}
