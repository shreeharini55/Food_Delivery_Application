package com.tap.DAO;

import java.util.ArrayList;

import com.tap.model.Restaurant;

public interface RestaurantDAO {

    ArrayList<Restaurant> getAllRestaurants();

    Restaurant getRestaurantBySlug(String slug);
}