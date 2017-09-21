package com.gms.web.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;
import com.gms.web.compiex.CommandFactory;

@Component
public class Separator {
	public static Command cmd = new Command();
	
	public static void init(HttpServletRequest request){
		String servletPath = request.getServletPath(); //request가 건너온 경로
		
		cmd = CommandFactory.createCommand(servletPath.substring(1, servletPath.indexOf(".")), 
				request.getParameter("action"), 
				request.getParameter("page"),
				request.getParameter("pageNumber"),
				request.getParameter("column"),
				request.getParameter("search"));
	}
}
