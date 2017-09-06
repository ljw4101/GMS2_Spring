package com.gms.web.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

//Controller 의 기본구조

@Controller //annotation : AuthController에게 자격 부여
@RequestMapping("/auth")
public class AuthController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	
	//@Controller 클래스 안에서 자동으로 먹인다.
	@RequestMapping("/login_view")	//url
	public String goLogin(Model model) {
		logger.info("AuthController 진입: goLogin");	
		return "public:common/login.tiles";	//view
	}
	
	@RequestMapping("/login")
	public String login(Model model) {
		logger.info("AuthController 진입: login");	
		return "common/main";
	}
}
