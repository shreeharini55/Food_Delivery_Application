package com.tap.DAO;

import java.util.ArrayList;

import com.tap.model.Cart;
import com.tap.model.CartItem;

public interface CartDAO {

    int addToCart(Cart cart);

    ArrayList<CartItem> getCartByUserId(int userId);

    int updateQuantity(int cartId, int quantity);

    int removeItem(int cartId);

    int clearCart(int userId);
}