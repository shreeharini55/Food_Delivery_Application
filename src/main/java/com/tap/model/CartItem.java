package com.tap.model;

public class CartItem {

    private int cartId;
    private int menuId;
    private int quantity;

    private String itemName;
    private double price;
    private String imageUrl;
    private String restaurantName;

    public CartItem() {
    }

    public CartItem(int cartId, int menuId, int quantity,
                    String itemName, double price,
                    String imageUrl, String restaurantName) {

        this.cartId = cartId;
        this.menuId = menuId;
        this.quantity = quantity;
        this.itemName = itemName;
        this.price = price;
        this.imageUrl = imageUrl;
        this.restaurantName = restaurantName;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getMenuId() {
        return menuId;
    }

    public void setMenuId(int menuId) {
        this.menuId = menuId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }
}