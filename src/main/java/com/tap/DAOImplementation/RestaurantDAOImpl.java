package com.tap.DAOImplementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.tap.DAO.RestaurantDAO;
import com.tap.model.Restaurant;
import com.tap.utility.DBConnection;

public class RestaurantDAOImpl implements RestaurantDAO {

    private static final String GET_ALL_RESTAURANTS =
            "SELECT * FROM restaurant";

    private static final String GET_RESTAURANT_BY_SLUG =
            "SELECT * FROM restaurant WHERE slug = ?";

    @Override
    public ArrayList<Restaurant> getAllRestaurants() {

        ArrayList<Restaurant> restaurants = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_ALL_RESTAURANTS);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {

                Restaurant restaurant = new Restaurant();

                restaurant.setRestaurantId(
                        rs.getInt("restaurant_id"));

                restaurant.setSlug(
                        rs.getString("slug"));

                restaurant.setName(
                        rs.getString("name"));

                restaurant.setRating(
                        rs.getDouble("rating"));

                restaurant.setTags(
                        rs.getString("tags"));

                restaurant.setDeliveryTime(
                        rs.getString("delivery_time"));

                restaurant.setDeliveryFee(
                        rs.getString("delivery_fee"));

                restaurant.setImageUrl(
                        rs.getString("image_url"));

                restaurants.add(restaurant);
            }

        } catch (Exception e) {

            e.printStackTrace();
        }

        return restaurants;
    }

    @Override
    public Restaurant getRestaurantBySlug(String slug) {

        Restaurant restaurant = null;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_RESTAURANT_BY_SLUG);

            pstmt.setString(1, slug);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {

                restaurant = new Restaurant();

                restaurant.setRestaurantId(
                        rs.getInt("restaurant_id"));

                restaurant.setSlug(
                        rs.getString("slug"));

                restaurant.setName(
                        rs.getString("name"));

                restaurant.setRating(
                        rs.getDouble("rating"));

                restaurant.setTags(
                        rs.getString("tags"));

                restaurant.setDeliveryTime(
                        rs.getString("delivery_time"));

                restaurant.setDeliveryFee(
                        rs.getString("delivery_fee"));

                restaurant.setImageUrl(
                        rs.getString("image_url"));
            }

        } catch (Exception e) {

            e.printStackTrace();
        }

        return restaurant;
    }
}