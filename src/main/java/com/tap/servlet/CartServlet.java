package com.tap.servlet;

import java.io.IOException;
import java.util.ArrayList;

import com.tap.DAOImplementation.CartDAOImpl;
import com.tap.model.Cart;
import com.tap.model.CartItem;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/cart")
public class CartServlet extends HttpServlet {

    private CartDAOImpl dao = new CartDAOImpl();
    
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        resp.setStatus(HttpServletResponse.SC_OK);
    }

    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp)
            throws ServletException, IOException {
    	resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    	resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    	resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        int userId = Integer.parseInt(req.getParameter("userId"));

        ArrayList<CartItem> carts = dao.getCartByUserId(userId);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        StringBuilder json = new StringBuilder();

        json.append("[");

        for (int i = 0; i < carts.size(); i++) {

            CartItem c = carts.get(i);

            json.append("{");
            json.append("\"cartId\":").append(c.getCartId()).append(",");
            json.append("\"menuId\":").append(c.getMenuId()).append(",");
            json.append("\"quantity\":").append(c.getQuantity()).append(",");
            json.append("\"itemName\":\"").append(c.getItemName()).append("\",");
            json.append("\"price\":").append(c.getPrice()).append(",");
            json.append("\"imageUrl\":\"").append(c.getImageUrl()).append("\",");
            json.append("\"restaurantName\":\"").append(c.getRestaurantName()).append("\"");
            json.append("}");

            if (i < carts.size() - 1) {
                json.append(",");
            }
        }

        json.append("]");

        resp.getWriter().print(json.toString());
    }

    @Override
    protected void doPost(HttpServletRequest req,
                          HttpServletResponse resp)
            throws ServletException, IOException {
    	resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    	resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    	resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        Cart cart = new Cart();

        cart.setUserId(Integer.parseInt(req.getParameter("userId")));
        cart.setMenuId(Integer.parseInt(req.getParameter("menuId")));
        cart.setQuantity(Integer.parseInt(req.getParameter("quantity")));

        dao.addToCart(cart);

        resp.getWriter().print("Added Successfully");
    }

    @Override
    protected void doPut(HttpServletRequest req,
                         HttpServletResponse resp)
            throws ServletException, IOException {
    	resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    	resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    	resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        int cartId = Integer.parseInt(req.getParameter("cartId"));
        int quantity = Integer.parseInt(req.getParameter("quantity"));

        dao.updateQuantity(cartId, quantity);

        resp.getWriter().print("Updated Successfully");
    }

    @Override
    protected void doDelete(HttpServletRequest req,
                            HttpServletResponse resp)
            throws ServletException, IOException {
    	resp.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    	resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    	resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        String cartId = req.getParameter("cartId");

        if (cartId != null) {

            dao.removeItem(Integer.parseInt(cartId));
            resp.getWriter().print("Deleted Successfully");

        } else {

            int userId = Integer.parseInt(req.getParameter("userId"));

            dao.clearCart(userId);

            resp.getWriter().print("Cart Cleared");
        }
    }
}