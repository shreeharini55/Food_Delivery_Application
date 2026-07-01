package com.tap.DAO;

import java.util.ArrayList;

import com.tap.model.Order;
import com.tap.model.OrderItem;

public interface OrderDAO {

    int placeOrder(Order order);

    int addOrderItem(OrderItem item);

    ArrayList<Order> getOrdersByUserId(int userId);

    ArrayList<OrderItem> getOrderItems(int orderId);

}