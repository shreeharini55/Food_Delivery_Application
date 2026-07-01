package com.tap.servlet;

import java.io.IOException;
import java.util.ArrayList;

import com.tap.DAOImplementation.OrderDAOImpl;
import com.tap.model.Order;
import com.tap.model.OrderItem;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/order")
public class OrderServlet extends HttpServlet {

    private OrderDAOImpl orderDAO = new OrderDAOImpl();

    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp)
            throws ServletException, IOException {

        int userId = Integer.parseInt(req.getParameter("userId"));

        ArrayList<Order> orders = orderDAO.getOrdersByUserId(userId);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        StringBuilder json = new StringBuilder();

        json.append("[");

        for (int i = 0; i < orders.size(); i++) {

            Order o = orders.get(i);

            json.append("{");
            json.append("\"orderId\":").append(o.getOrderId()).append(",");
            json.append("\"userId\":").append(o.getUserId()).append(",");
            json.append("\"customerName\":\"").append(o.getCustomerName()).append("\",");
            json.append("\"address\":\"").append(o.getAddress()).append("\",");
            json.append("\"subtotal\":").append(o.getSubtotal()).append(",");
            json.append("\"deliveryFee\":").append(o.getDeliveryFee()).append(",");
            json.append("\"total\":").append(o.getTotal()).append(",");
            json.append("\"status\":\"").append(o.getStatus()).append("\",");
            json.append("\"orderDate\":\"").append(o.getOrderDate()).append("\"");
            json.append("}");

            if (i < orders.size() - 1) {
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

        Order order = new Order();

        order.setUserId(
                Integer.parseInt(req.getParameter("userId")));

        order.setCustomerName(
                req.getParameter("customerName"));

        order.setAddress(
                req.getParameter("address"));

        order.setSubtotal(
                Double.parseDouble(req.getParameter("subtotal")));

        order.setDeliveryFee(
                Double.parseDouble(req.getParameter("deliveryFee")));

        order.setTotal(
                Double.parseDouble(req.getParameter("total")));

        int orderId = orderDAO.placeOrder(order);

        resp.setContentType("text/plain");
        resp.getWriter().print(orderId);
    }
}