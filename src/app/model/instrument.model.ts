export class Instrument 
{
    id: number | undefined;
    name: string = "";
    model: string = "";
    price: number = 0.0;
    picByte: string = "";  
    type: string = "";
    createTime: Date = new Date();
  
    constructor(id?: number, name: string = "", price: number = 0)
    {
      this.id = id;
      this.name = name;
      this.price = price;
    }
}