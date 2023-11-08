export class Sales {
  public id?: 0
  // public paid?: number
  public totalAmount?: number
  // public discount?: number
  public valueAddedTax?: number
  public totalAmountWithTax?: number
  public name_Client?: string
  public client_ID?: number
  public product_Orders?:product_Orders[]
  
}

export class product_Orders{
    public publicid?: number
    public order_ID?: number
    public count?: number
}