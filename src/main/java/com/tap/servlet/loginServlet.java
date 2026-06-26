package com.tap.servlet;

import java.io.IOException;

import com.tap.DAOImplementation.loginDAOImple;
import com.tap.model.signup;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class loginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        response.getWriter().println("Login Servlet Working");
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        loginDAOImple dao = new loginDAOImple();

        signup user = dao.getUser(email, password);

        if (user != null) {

            String json =
                    "{"
                    + "\"userId\":" + user.getUserId() + ","
                    + "\"username\":\"" + user.getUsername() + "\","
                    + "\"email\":\"" + user.getEmail() + "\""
                    + "}";

            response.getWriter().print(json);

        } else {

            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            response.getWriter().print(
                    "{\"message\":\"Invalid Email or Password\"}");
        }
    }
}