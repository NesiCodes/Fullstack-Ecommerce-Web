import {CartItem} from "./cart-item";

export class OrderItem {

  public imageUrl: string
  public unitPrice: number
  public quantity: number
  public productId: string

  constructor(
              cartItem: CartItem) {
    this.imageUrl = cartItem.imageUrl;
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    this.productId = cartItem.id;
  }
}
