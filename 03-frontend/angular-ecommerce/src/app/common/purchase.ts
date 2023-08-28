import {Address} from "./address";
import {Customer} from "./customer";
import {Order} from "./order";
import {OrderItem} from "./order-item";

export class Purchase {
    public customer: Customer | undefined;
    public shippingAddress: Address | undefined;
    public billingAddress: Address | undefined;
    public order: Order | undefined;
    public orderItems: OrderItem[] | undefined;
  constructor() {
  }
}
