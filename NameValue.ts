export class NameValue {
    name: string;
    value: any;
    label: string;
    isVisible: boolean = true;

    get displayValue() {
        // check to see if this.value is NOT A NUM
        let typename = this.value.constructor.name;
        if (this.isVisible == true) {
            if (typename == "String") {
                return this.value;
            }
            else if (typename == "Number") {
                return this.value.toLocaleString(this.value);
            }
            else if (typename == "Date") {
                return this.value.toLocaleString(this.value);
            }
            else if (typename == "Boolean") {
                return this.value ? "Yes" : "No";
            }
            else {
                return this.value;
            }
        }
    }

    constructor(name: string, value: any) {
        this.name = name;
        this.value = value;
    }
}