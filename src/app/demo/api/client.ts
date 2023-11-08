export class Client {
    public id?:number
    public name?: string
    public phone?: string
    public address?: string
    public number?: number
    constructor(id:number,name:string,phone:string,address:string,number:number){
        this.id=id
        this.name=name
        this.phone=phone
        this.address=address
        this.number=number
    }
}
