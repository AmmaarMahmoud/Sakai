export class Product {
    public id ?:number;
    public name?: string;
    public tax?: number;
    public type_tax?: number;
    public price?: number;
    public unit?: number;
    public count?: number;
    public category_ID?: number

    constructor(id:number , name: string, tax: number , type_tax:number , price:number , unit:number , count:number , category_ID:number){
        this.id=id
        this.name=name
        this.tax=tax
        this.type_tax=type_tax
        this.price=price
        this.unit=unit
        this.count=count
        this.category_ID=category_ID
    }
}
