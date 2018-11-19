import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DataRow } from "../DataRow";
import { StatusServicePacket } from '../StatusServicePacket';

@Injectable()
export class StatusService {

  statusChange$: Observable<StatusServicePacket>;
  private statusSubject: Subject<StatusServicePacket>;

  constructor() {
    this.statusSubject = new Subject<StatusServicePacket>();
    this.statusChange$ = this.statusSubject.asObservable();
  }

  private _status: string = "Ready";
  get status(): string {
    return this._status;
  }
  // set status(value: string) {
  //   this._status = value;
  //   console.log(value);
  //   this.statusSubject.next(this._status);
  // }

  Status(packet: StatusServicePacket) {
    //console.log(msg);
    this.statusSubject.next(packet);
  }
}
