package com.tap.DAOImplementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.tap.DAO.OrderDAO;
import com.tap.model.Order;
import com.tap.model.OrderItem;
import com.tap.utility.DBConnection;

public class OrderDAOImpl implements OrderDAO {

    private static final String INSERT_ORDER =
            "INSERT INTO orders(user_id, customer_name, address, subtotal, delivery_fee, total, status) VALUES(?,?,?,?,?,?,?)";

    private static final String INSERT_ITEM =
            "INSERT INTO order_items(order_id, menu_id, item_name, quantity, price) VALUES(?,?,?,?,?)";

    private static final String GET_ORDERS =
            "SELECT * FROM orders WHERE user_id=? ORDER BY order_date DESC";

    private static final String GET_ITEMS =
            "SELECT * FROM order_items WHERE order_id=?";

    @Override
    public int placeOrder(Order order) {

        int orderId = 0;
        for (OrderItem item : order.getItems()) {

            item.setOrderId(orderId);

            addOrderItem(item);

        }

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt = con.prepareStatement(
                    INSERT_ORDER,
                    PreparedStatement.RETURN_GENERATED_KEYS);

            pstmt.setInt(1, order.getUserId());
            pstmt.setString(2, order.getCustomerName());
            pstmt.setString(3, order.getAddress());
            pstmt.setDouble(4, order.getSubtotal());
            pstmt.setDouble(5, order.getDeliveryFee());
            pstmt.setDouble(6, order.getTotal());
            pstmt.setString(7, "Placed");

            pstmt.executeUpdate();

            ResultSet rs = pstmt.getGeneratedKeys();

            if (rs.next()) {

                orderId = rs.getInt(1);

            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return orderId;
    }

    @Override
    public int addOrderItem(OrderItem item) {

        int status = 0;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(INSERT_ITEM);

            pstmt.setInt(1, item.getOrderId());
            pstmt.setInt(2, item.getMenuId());
            pstmt.setString(3, item.getItemName());
            pstmt.setInt(4, item.getQuantity());
            pstmt.setDouble(5, item.getPrice());

            status = pstmt.executeUpdate();

        } catch (Exception e) {

            e.printStackTrace();

        }

        return status;
    }

    @Override
    public ArrayList<Order> getOrdersByUserId(int userId) {

        ArrayList<Order> list = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_ORDERS);

            pstmt.setInt(1, userId);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {

                Order order = new Order();

                order.setOrderId(rs.getInt("order_id"));
                order.setUserId(rs.getInt("user_id"));
                order.setCustomerName(rs.getString("customer_name"));
                order.setAddress(rs.getString("address"));
                order.setSubtotal(rs.getDouble("subtotal"));
                order.setDeliveryFee(rs.getDouble("delivery_fee"));
                order.setTotal(rs.getDouble("total"));
                order.setStatus(rs.getString("status"));
                order.setOrderDate(rs.getTimestamp("order_date"));

                list.add(order);

            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return list;
    }

    @Override
    public ArrayList<OrderItem> getOrderItems(int orderId) {

        ArrayList<OrderItem> list = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_ITEMS);

            pstmt.setInt(1, orderId);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {

                OrderItem item = new OrderItem();

                item.setOrderItemId(rs.getInt("order_item_id"));
                item.setOrderId(rs.getInt("order_id"));
                item.setMenuId(rs.getInt("menu_id"));
                item.setItemName(rs.getString("item_name"));
                item.setQuantity(rs.getInt("quantity"));
                item.setPrice(rs.getDouble("price"));

                list.add(item);

            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return list;
    }
}