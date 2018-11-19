export class DataColumn {
    name: string;
    label: string;
    hidden: boolean;

    constructor(name: string, label: string, hidden: boolean) {
        this.name = name;
        this.label = label;
        this.hidden = hidden

    }
}