import { TablePref } from './TablePref';

export class UserProfile {
    username: string;
    password: string;
    tablePrefs: Array<TablePref> = new Array<TablePref>();

    private _userName: string;
    get UserName(): string {
        return this._userName;
    }
    set UserName(value: string) {
        this._userName = value;
    }

    private _password: string;
    get Password(): string {
        return this._password;
    }
    set Password(value: string) {
        this._password = value;
    }
}