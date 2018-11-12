export class Bicycle {
    id: number;
    name: string;
    year: number;
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }