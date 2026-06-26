package com.tap.servlet;

import java.io.IOException;
import java.util.ArrayList;

import com.tap.DAOImplementation.RestaurantDAOImpl;
import com.tap.model.Restaurant;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/restaurants")
public class RestaurantServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        RestaurantDAOImpl dao = new RestaurantDAOImpl();

        ArrayList<Restaurant> restaurants =
                dao.getAllRestaurants();

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        StringBuilder json = new StringBuilder();

        json.append("[");

        for (int i = 0; i < restaurants.size(); i++) {

            Restaurant r = restaurants.get(i);

            json.append("{");
            json.append("\"restaurantId\":").append(r.getRestaurantId()).append(",");
            json.append("\"slug\":\"").append(r.getSlug()).append("\",");
            json.append("\"name\":\"").append(r.getName()).append("\",");
            json.append("\"rating\":").append(r.getRating()).append(",");
            json.append("\"tags\":\"").append(r.getTags()).append("\",");
            json.append("\"deliveryTime\":\"").append(r.getDeliveryTime()).append("\",");
            json.append("\"deliveryFee\":\"").append(r.getDeliveryFee()).append("\",");
            json.append("\"imageUrl\":\"").append(r.getImageUrl()).append("\"");
            json.append("}");

            if (i < restaurants.size() - 1) {
                json.append(",");
            }
        }

        json.append("]");

        response.getWriter().print(json.toString());
    }
}