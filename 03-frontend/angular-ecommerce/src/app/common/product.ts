export class Product {

  //names match with the data that is passed by the spring boot
  constructor(public id: string,
              public sku: string,
              public name: string,
              public description: string,
              public unitPrice: number,
              public imageUrl: string,
              public active: boolean,
              public unitsInStock: number,
              public dateCreated: Date,
              public lastUpdated: Date){}
}
