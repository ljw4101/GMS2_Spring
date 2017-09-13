package com.gms.web.common;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

@Controller //annotation : AuthController에게 자격 부여
@RequestMapping("/auth")
@SessionAttributes("user")
public class AuthController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@Autowired MemberService service;  // MemberService service = MemberServiceImple.getInstance(); //singleton으로 가져온다.
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	
	//@Controller 클래스 안에서 자동으로 먹인다.
	@RequestMapping("/login_view")	//url
	public String goLogin(Model model) {
		logger.info("AuthController 진입: goLogin");	
		return "public:common/login.tiles";	//view
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	//form 태그안에 있기 때문에 @RequestParam 자동으로 인식/name으로 가져온다.
	public String login(@RequestParam("id") String id, @RequestParam("pw") String pw, Model model) {
		logger.info("id= "+id);	
		logger.info("pw= "+pw);	
		
		cmd.setSearch(id);
		cmd.setAction(pw);		
		Map<String, Object> map = service.login(cmd);
		
		if(map.get("result").equals("success")) {
			model.addAttribute("user", map.get("user"));
		}
		
		model.addAttribute("result", map.get("result"));

		return String.valueOf(map.get("page"));
	}
}
