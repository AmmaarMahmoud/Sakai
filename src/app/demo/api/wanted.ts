export class Wanted {
  public id?: number
  public name?: string
  public phone?: string
  public address?: string

  constructor(id:number,name: string,phone: string,address: string){
    this.id=id
    this.name=name
    this.phone=phone
    this.address=address
  }
}
