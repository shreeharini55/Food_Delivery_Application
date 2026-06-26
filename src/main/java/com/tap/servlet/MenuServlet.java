package com.tap.servlet;

import java.io.IOException;
import java.util.ArrayList;

import com.tap.DAOImplementation.MenuDAOImpl;
import com.tap.DAOImplementation.RestaurantDAOImpl;
import com.tap.model.Menu;
import com.tap.model.Restaurant;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/menu")
public class MenuServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp)
            throws ServletException, IOException {

        String slug = req.getParameter("slug");

        RestaurantDAOImpl restaurantDAO = new RestaurantDAOImpl();

        Restaurant restaurant =
                restaurantDAO.getRestaurantBySlug(slug);

        if (restaurant == null) {

            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            resp.getWriter().print("Restaurant Not Found");
            return;
        }

        MenuDAOImpl menuDAO = new MenuDAOImpl();

        ArrayList<Menu> menus =
                menuDAO.getMenusByRestaurantId(
                        restaurant.getRestaurantId());

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        StringBuilder json = new StringBuilder();

        json.append("[");

        for (int i = 0; i < menus.size(); i++) {

            Menu m = menus.get(i);

            json.append("{");
            json.append("\"menuId\":").append(m.getMenuId()).append(",");
            json.append("\"restaurantId\":").append(m.getRestaurantId()).append(",");
            json.append("\"itemName\":\"").append(m.getItemName()).append("\",");
            json.append("\"description\":\"").append(m.getDescription()).append("\",");
            json.append("\"price\":").append(m.getPrice()).append(",");
            json.append("\"calories\":").append(m.getCalories()).append(",");
            json.append("\"imageUrl\":\"").append(m.getImageUrl()).append("\",");
            json.append("\"fat\":\"").append(m.getFat()).append("\",");
            json.append("\"saturates\":\"").append(m.getSaturates()).append("\",");
            json.append("\"sugars\":\"").append(m.getSugars()).append("\",");
            json.append("\"salt\":\"").append(m.getSalt()).append("\",");
            json.append("\"featured\":").append(m.isFeatured());
            json.append("}");

            if (i < menus.size() - 1) {
                json.append(",");
            }
        }

        json.append("]");

        resp.getWriter().print(json.toString());
    }
}