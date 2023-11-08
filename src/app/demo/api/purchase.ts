export class Purchase {
    public id:number
    public paymentMethod:number
    public valueAddedTax:number
    public totalAmount:number
    public totalAmountWithTax:number
    public client_ID:number
    public product_Purchases?: product_Purchases[]
    constructor(id:number,paymentMethod:number,valueAddedTax:number,totalAmount:number,totalAmountWithTax:number,client_ID:number,product_Purchases:product_Purchases[]){
        this.id=id,
        this.paymentMethod=paymentMethod,
        this.valueAddedTax=valueAddedTax,
        this.totalAmount=totalAmount,
        this.totalAmountWithTax=totalAmountWithTax,
        this.client_ID=client_ID,
        this.product_Purchases=product_Purchases
        
    }
}
export class product_Purchases {
      public id?:number
      public purchase_ID?:number
      public count?:number
}