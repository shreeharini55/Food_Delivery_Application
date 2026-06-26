package com.tap.utility;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

    private static final String URL =
            "jdbc:mysql://localhost:3306/FOOD_APP";

    private static final String USER = "root";

    private static final String PASSWORD = "aphase5theone";

    private static Connection connection;

    public static Connection getConnection() {

        try {

            if (connection == null || connection.isClosed()) {

                Class.forName("com.mysql.cj.jdbc.Driver");

                connection = DriverManager.getConnection(
                        URL,
                        USER,
                        PASSWORD
                );
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return connection;
    }
}