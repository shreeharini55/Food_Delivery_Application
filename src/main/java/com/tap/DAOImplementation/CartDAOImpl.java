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

            // Check whether the item already exists in the cart
            String checkQuery =
                    "SELECT quantity FROM cart WHERE user_id = ? AND menu_id = ?";

            PreparedStatement checkStmt =
                    con.prepareStatement(checkQuery);

            checkStmt.setInt(1, cart.getUserId());
            checkStmt.setInt(2, cart.getMenuId());

            ResultSet rs = checkStmt.executeQuery();

            if (rs.next()) {

                // Item already exists → increase quantity
                int existingQuantity = rs.getInt("quantity");

                String updateQuery =
                        "UPDATE cart SET quantity = ? WHERE user_id = ? AND menu_id = ?";

                PreparedStatement updateStmt =
                        con.prepareStatement(updateQuery);

                updateStmt.setInt(1, existingQuantity + cart.getQuantity());
                updateStmt.setInt(2, cart.getUserId());
                updateStmt.setInt(3, cart.getMenuId());

                status = updateStmt.executeUpdate();

            } else {

                // Item doesn't exist → insert new row
                PreparedStatement insertStmt =
                        con.prepareStatement(INSERT);

                insertStmt.setInt(1, cart.getUserId());
                insertStmt.setInt(2, cart.getMenuId());
                insertStmt.setInt(3, cart.getQuantity());

                status = insertStmt.executeUpdate();
            }

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