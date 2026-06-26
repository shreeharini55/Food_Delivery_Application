package com.tap.DAOImplementation;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.tap.DAO.signup_DAO;
import com.tap.model.signup;
import com.tap.utility.DBConnection;

public class signupDAOImple implements signup_DAO {


private static final String INSERT_USER =
        "INSERT INTO users(username,email,password) VALUES(?,?,?)";

@Override
public int addUser(signup user) {

    int result = 0;

    try {

        Connection con = DBConnection.getConnection();

        PreparedStatement pstmt =
                con.prepareStatement(INSERT_USER);

        pstmt.setString(1, user.getUsername());
        pstmt.setString(2, user.getEmail());
        pstmt.setString(3, user.getPassword());

        result = pstmt.executeUpdate();

    } catch (Exception e) {
        System.out.println("Error Occurred:");
        e.printStackTrace();
    }

    return result;
}


}
