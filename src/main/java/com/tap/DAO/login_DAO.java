package com.tap.DAO;

import com.tap.model.signup;

public interface login_DAO {

    boolean validateUser(String email, String password);

    signup getUser(String email, String password);

}