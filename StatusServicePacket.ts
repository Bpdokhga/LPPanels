export class StatusServicePacket {

    private _isTimed: boolean = false;
    get isTimed(): boolean {
        return this._isTimed;
    }
    set isTimed(value: boolean) {
        this._isTimed = value;
    }

    private _message: string = "";
    get message(): string {
        return this._message;
    }
    set message(value: string) {
        this._message = value;
    }

    constructor(message: string, isTimed: boolean) {
        this.message = message;
        this.isTimed = isTimed;
    }
}