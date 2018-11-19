export class EmailPouch {

    from: string;
    to:Array<string> = new Array<string>();
    cc: Array<string> = new Array<string>();
    bcc: Array<string> = new Array<string>();
    subject: string;
    body: string;
    attachments: Array<string> = new Array<string>();
    sendDate: Date;

}