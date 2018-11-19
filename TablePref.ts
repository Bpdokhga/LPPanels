import { FieldPref } from './FieldPref';

export class TablePref {
    name: string;
    collapsable: boolean;
    hidden: boolean;
    fieldPreferences: Array<FieldPref> = new Array<FieldPref>(); 
}