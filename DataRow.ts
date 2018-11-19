import { NameValue } from './NameValue';
import { DataTable } from "./DataTable";
import { DataColumn } from "./DataColumn";

export class DataRow {

    table: DataTable;
    title: string;
    id: string;
    values: Array<NameValue> = new Array<NameValue>();


    constructor(table: DataTable) {
        this.table = table;
    }

    get titleValue(): NameValue {
        return this.values[0];
    }
    get detailValues(): Array<NameValue> {
        let result = new Array<NameValue>();
        for (let r of this.values) {
            let col = this.table.FindColumn(r.name);
            if (col != null && !col.hidden)
                //if (this.table.findColumn(r.name).hidden==false)
                result.push(r);

        }

        if (result.length > 0)
            result.shift();
        return result;
    }


    private _isSelected: boolean = false;
    get isSelected(): boolean {
        return this._isSelected;
    }
    set isSelected(value: boolean) {
        console.log("DataRow.iSelected=" + value);
        this._isSelected = value;
    }

    private _id: string = "";
    get idValue(): string {
        return this._id;
    }
    set idValue(value: string) {
        this._id = value;
    }


    //*********
    //*********
    setValue(columnName: string, value: string) {
        let column = this.table.FindColumn(columnName);
        if (column != null) {
            //throw "Invalid Column Name " + columnName;
            let buffer = this.values.find(x => x.name === columnName);
            if (buffer == null) {
                buffer = new NameValue(columnName, value)
                this.values.push(buffer);
            }
            else {
                buffer.value = value;
            }
        }
    }

    //*********
    //*********
    getValue(columnName: string): string {
        let result: string = "";
        let column = this.table.FindColumn(columnName);
        if (column != null) {
            //throw "Invalid Column Name " + columnName;
            if (columnName !== null) {
                let buffer = this.values.find(x => x.name === columnName);
                if (buffer !== null) {
                    result = buffer.value;
                }
            }
        }

        return result;
    }
}