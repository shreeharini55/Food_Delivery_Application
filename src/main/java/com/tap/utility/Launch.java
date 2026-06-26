package com.tap.utility;

import com.tap.DAOImplementation.signupDAOImple;
import com.tap.model.signup;

public class Launch {

    public static void main(String[] args) {

        signup user = new signup(
                "Harini",
                "harini@gmail.com",
                "123456"
        );

        signupDAOImple dao = new signupDAOImple();

        int result = dao.addUser(user);

        if(result > 0) {
            System.out.println("User Inserted Successfully");
        }
        else {
            System.out.println("Insertion Failed");
        }
    }
}