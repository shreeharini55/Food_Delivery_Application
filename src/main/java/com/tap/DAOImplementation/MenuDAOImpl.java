package com.tap.DAOImplementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.tap.DAO.MenuDAO;
import com.tap.model.Menu;
import com.tap.utility.DBConnection;

public class MenuDAOImpl implements MenuDAO {

    private static final String GET_ALL_MENU =
            "SELECT * FROM menu";

    private static final String GET_MENU_BY_RESTAURANT =
            "SELECT * FROM menu WHERE restaurant_id = ?";

    @Override
    public ArrayList<Menu> getAllMenus() {

        ArrayList<Menu> menus = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_ALL_MENU);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {

                Menu menu = extractMenu(rs);

                menus.add(menu);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return menus;
    }

    @Override
    public ArrayList<Menu> getMenusByRestaurantId(int restaurantId) {

        ArrayList<Menu> menus = new ArrayList<>();

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(GET_MENU_BY_RESTAURANT);

            pstmt.setInt(1, restaurantId);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {

                Menu menu = extractMenu(rs);

                menus.add(menu);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return menus;
    }

    private Menu extractMenu(ResultSet rs) throws Exception {

        Menu menu = new Menu();

        menu.setMenuId(rs.getInt("menu_id"));
        menu.setRestaurantId(rs.getInt("restaurant_id"));
        menu.setItemName(rs.getString("item_name"));
        menu.setDescription(rs.getString("description"));
        menu.setPrice(rs.getDouble("price"));
        menu.setCalories(rs.getInt("calories"));
        menu.setImageUrl(rs.getString("image_url"));
        menu.setFat(rs.getString("fat"));
        menu.setSaturates(rs.getString("saturates"));
        menu.setSugars(rs.getString("sugars"));
        menu.setSalt(rs.getString("salt"));
        menu.setFeatured(rs.getBoolean("featured"));

        return menu;
    }
}