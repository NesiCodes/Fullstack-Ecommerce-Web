package com.unejsi.springbootecommerce.dto;

import com.unejsi.springbootecommerce.entity.Address;
import com.unejsi.springbootecommerce.entity.Customer;
import com.unejsi.springbootecommerce.entity.Order;
import com.unejsi.springbootecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;
}
