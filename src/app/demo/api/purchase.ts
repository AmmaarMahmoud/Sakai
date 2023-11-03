export class Purchase {
    public id:number
    public paymentMethod:number
    public storeNumber:number
    public totalAmount:number
    public discount:number
    public valueAddedTax:number
    public totalAmountWithTax:number
    public client_ID:number
    public product_Purchases?: product_Purchases[]
    constructor(id:number,paymentMethod:number,storeNumber:number,totalAmount:number,discount:number,valueAddedTax:number,totalAmountWithTax:number,client_ID:number,product_Purchases:product_Purchases[]){
        this.id=id,
        this.paymentMethod=paymentMethod,
        this.storeNumber=storeNumber,
        this.totalAmount=totalAmount,
        this.discount=discount,
        this.valueAddedTax=valueAddedTax,
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