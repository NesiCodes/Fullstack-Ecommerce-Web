import { Injectable } from '@angular/core';
import {CartItem} from "../common/cart-item";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  //subject is a subclass of observable which we can use to publish events. the event will be sent to all subscribers of this service
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  //storage: Storage = sessionStorage; //saves in-memory (lost after browser is closed)
  storage: Storage = localStorage; //saves in-session (not lost after browser is closed)


  constructor() {

    //read data from storage
    let data = JSON.parse(this.storage.getItem('cartItems')!);

    if(data != null){
      this.cartItems = data;

      //compute totals based on the data that is read from storage
      this.computeCartTotals()
    }
  }

  addToCart(theCartItem: CartItem){

    //check if we already have the item in our cart
    let alreadyExistsInCart: boolean=false;
    let existingCartItem: CartItem= undefined!;

    if(this.cartItems.length > 0){
      //find the item in the cart based on item id
      for(let tempCartItem of this.cartItems){
        if(tempCartItem.id === theCartItem.id){
          existingCartItem = tempCartItem;
          alreadyExistsInCart = true;
          break;
        }
      }
    }


    //check if we found it
    if(alreadyExistsInCart){
      console.log("got here")
      existingCartItem.quantity++;
      console.log("after: " + existingCartItem.quantity + ` ${existingCartItem.name}`);
    }else{
      this.cartItems.push(theCartItem);
    }

    //compute cart totalPrice and totalQuantity
    this.computeCartTotals();

  }

  public computeCartTotals() {

    let totalPriceValue: number=0;
    let totalQuantityValue: number=0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    //public the new values... all subscribes will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);

    //persist cart data
    this.persistCartItems();
  }

  persistCartItems(){
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log("Contents of the cart");
    for(let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotal=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log("------");
  }

  decrementQuantity(tempCartItem: CartItem) {
    tempCartItem.quantity--;

    if(tempCartItem.quantity == 0){
      this.remove(tempCartItem);
    }else{
      this.computeCartTotals()
    }
  }


  public remove(theCartItem: CartItem) {

    //get index of item in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    if(itemIndex>-1){
      this.cartItems.splice(itemIndex,1);
      this.computeCartTotals()
    }

    //if found, remove the item

  }
}
