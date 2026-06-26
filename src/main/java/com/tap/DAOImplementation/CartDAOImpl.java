package com.tap.DAOImplementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.tap.DAO.CartDAO;
import com.tap.model.Cart;
import com.tap.model.CartItem;
import com.tap.utility.DBConnection;

public class CartDAOImpl implements CartDAO {

    private static final String INSERT =
            "INSERT INTO cart(user_id, menu_id, quantity) VALUES (?, ?, ?)";

    private static final String GET_CART =
            "SELECT " +
            "c.cart_id, " +
            "c.menu_id, " +
            "c.quantity, " +
            "m.item_name, " +
            "m.price, " +
            "m.image_url, " +
            "r.name AS restaurant_name " +
            "FROM cart c " +
            "JOIN menu m ON c.menu_id = m.menu_id " +
            "JOIN restaurant r ON m.restaurant_id = r.restaurant_id " +
            "WHERE c.user_id = ?";

    private static final String UPDATE =
            "UPDATE cart SET quantity=? WHERE cart_id=?";

    private static final String DELETE =
            "DELETE FROM cart WHERE cart_id=?";

    private static final String CLEAR =
            "DELETE FROM cart WHERE user_id=?";

    @Override
    public int addToCart(Cart cart) {

        int status = 0;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(INSERT);

            pstmt.setInt(1, cart.getUserId());
            pstmt.setInt(2, cart.getMenuId());
            pstmt.setInt(3, cart.getQuantity());

            status = pstmt.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;
    }

    @Override
    public ArrayList<CartItem> getCartByUserId(int userId) {

        ArrayList<CartItem> list = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_CART);

            pstmt.setInt(1, userId);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {

                CartItem item = new CartItem();

                item.setCartId(rs.getInt("cart_id"));
                item.setMenuId(rs.getInt("menu_id"));
                item.setQuantity(rs.getInt("quantity"));
                item.setItemName(rs.getString("item_name"));
                item.setPrice(rs.getDouble("price"));
                item.setImageUrl(rs.getString("image_url"));
                item.setRestaurantName(rs.getString("restaurant_name"));

                list.add(item);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public int updateQuantity(int cartId, int quantity) {

        int status = 0;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(UPDATE);

            pstmt.setInt(1, quantity);
            pstmt.setInt(2, cartId);

            status = pstmt.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;
    }

    @Override
    public int removeItem(int cartId) {

        int status = 0;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(DELETE);

            pstmt.setInt(1, cartId);

            status = pstmt.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;
    }

    @Override
    public int clearCart(int userId) {

        int status = 0;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(CLEAR);

            pstmt.setInt(1, userId);

            status = pstmt.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return status;
    }
}