package com.tap.DAOImplementation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.tap.DAO.login_DAO;
import com.tap.model.signup;
import com.tap.utility.DBConnection;

public class loginDAOImple implements login_DAO {

    private static final String LOGIN_QUERY =
            "SELECT * FROM users WHERE email=? AND password=?";

    @Override
    public boolean validateUser(String email, String password) {

        return getUser(email, password) != null;
    }

    @Override
    public signup getUser(String email, String password) {

        signup user = null;

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement pstmt =
                    con.prepareStatement(LOGIN_QUERY);

            pstmt.setString(1, email);
            pstmt.setString(2, password);

            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {

                user = new signup();

                user.setUserId(rs.getInt("user_id"));
                user.setUsername(rs.getString("username"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return user;
    }
}