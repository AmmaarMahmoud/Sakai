export class Sales {
  public id?:number
  public Wanted_ID?: number
  public totalAmount?: number
  public valueAddedTax?: number
  public totalAmountWithTax?: number
  public product_Orders?:product_Orders[]

    constructor(id:number,Wanted_ID: number,totalAmount: number,valueAddedTax: number,totalAmountWithTax: number,product_Orders?:product_Orders[]){
      this.id=id
      this.Wanted_ID=Wanted_ID
      this.totalAmount=totalAmount
      this.valueAddedTax=valueAddedTax
      this.totalAmountWithTax=totalAmountWithTax
    }
}

export class product_Orders{
    public publicid?: number
    public order_ID?: number
    public count?: number
    public price?: number
}