package com.gms.web.common;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller //extends(상속), implements(추상화, 다형성) 없이 사용 할 수 있는 파일 : (plain of Java object) POJO 파일 -> OOP에 대한 부정
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("/") //Separator 작동
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale); //sysout 개념

		//내부적으로 proxy 패턴 처리된 상태 (request.setAttribute가 proxy에서 처리 됬었음)
		model.addAttribute("serverTime", new SimpleDateFormat("yyyy년 MM월 dd일 a hh:mm:ss").format(new Date()));
		
		return "public:common/home.tiles";  //home.jsp를 의미 : Command패턴 
	}
}
