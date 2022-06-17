export class Purchase 
{
    id: number | undefined;
    userId: number | undefined;
    instrumentId: number | undefined;
    price: number | undefined;
    purchaseTime: Date = new Date();
  
    constructor(userId?: number, instrumentId?: number, price?: number) 
    {
      this.userId = userId;
      this.instrumentId = instrumentId;
      this.price = price;
    }
}