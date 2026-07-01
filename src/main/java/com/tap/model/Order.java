package com.tap.model;

import java.sql.Timestamp;
import java.util.ArrayList;

public class Order {
	private ArrayList<OrderItem> items = new ArrayList<>();
	public ArrayList<OrderItem> getItems() {
	    return items;
	}

	public void setItems(ArrayList<OrderItem> items) {
	    this.items = items;
	}
	

    private int orderId;
    private int userId;
    private String customerName;
    private String address;
    private double subtotal;
    private double deliveryFee;
    private double total;
    private String status;
    private Timestamp orderDate;

    public Order() {
    }

    public Order(int orderId, int userId, String customerName,
            String address, double subtotal,
            double deliveryFee, double total,
            String status, Timestamp orderDate) {

   this.orderId = orderId;
   this.userId = userId;
   this.customerName = customerName;
   this.address = address;
   this.subtotal = subtotal;
   this.deliveryFee = deliveryFee;
   this.total = total;
   this.status = status;
   this.orderDate = orderDate;
}

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
    }

    public double getDeliveryFee() {
        return deliveryFee;
    }

    public void setDeliveryFee(double deliveryFee) {
        this.deliveryFee = deliveryFee;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }
}