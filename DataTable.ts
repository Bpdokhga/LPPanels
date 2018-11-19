import { DataRow } from './DataRow';
import { DataColumn } from './DataColumn';

export class DataTable {

    name: string;
    label: string;
    rows: Array<DataRow> = new Array<DataRow>();
    columns: Array<DataColumn> = new Array<DataColumn>();
    isCollapsed: boolean;

    GetLabel(): string {
        return this.label;
    }


    NewRow() : DataRow{
        return new DataRow(this);
    }

    AddRow(row: DataRow) {
        row.table = this;
        this.rows.push(row);
    }

    AddColumn(column: DataColumn) {
        this.columns.push(column);
    }

    FindColumn(name: string) : DataColumn {
        return this.columns.find(x => x.name == name);
    }
}