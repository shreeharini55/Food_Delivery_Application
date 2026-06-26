package com.tap.servlet;

import java.io.IOException;

import com.tap.DAOImplementation.signupDAOImple;
import com.tap.model.signup;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/signup")
public class signupServlet extends HttpServlet {
	
	 private static final long serialVersionUID = -5532002222552305897L;

	@Override
	protected void doGet(
	        HttpServletRequest request,
	        HttpServletResponse response)
	        throws ServletException, IOException {

	    response.getWriter().println("Signup Servlet Working");
	}
	
	@Override
	protected void doOptions(
	        HttpServletRequest request,
	        HttpServletResponse response)
	        throws ServletException, IOException {

	    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
	    response.setHeader("Access-Control-Allow-Headers", "*");
	    response.setStatus(HttpServletResponse.SC_OK);
	}

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
    	 response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    	 response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    	 response.setHeader("Access-Control-Allow-Headers", "*");

        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        signup user =
                new signup(username, email, password);

        signupDAOImple dao =
                new signupDAOImple();

        int result = dao.addUser(user);

        if(result > 0) {

            response.getWriter()
                    .println("Signup Successful");
        }
        else {

            response.getWriter()
                    .println("Signup Failed");
        }
    }
}