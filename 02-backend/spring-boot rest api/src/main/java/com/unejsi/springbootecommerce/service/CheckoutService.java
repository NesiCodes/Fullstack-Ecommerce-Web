package com.unejsi.springbootecommerce.service;

import com.unejsi.springbootecommerce.dto.Purchase;
import com.unejsi.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {


    PurchaseResponse  placeOrder(Purchase purchase);
}
