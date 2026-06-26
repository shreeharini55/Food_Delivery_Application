package com.tap.DAO;

import java.util.ArrayList;
import com.tap.model.Menu;

public interface MenuDAO {

    ArrayList<Menu> getAllMenus();

    ArrayList<Menu> getMenusByRestaurantId(int restaurantId);

}