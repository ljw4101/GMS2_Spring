package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("/mem_add")
	public String addMember(Model model) {
		logger.info("MemberController 진입: addMember");
		return "member/member_add";
	}
	
	@RequestMapping("/mem_list")
	public String listMember(Model model) {
		logger.info("MemberController 진입: listMember");
		return "member/member_list";
	}
	
	@RequestMapping("/mem_detail")
	public String detailMember(Model model) {
		logger.info("MemberController 진입: detailMember");
		return "member/member_detail";
	}
	
	@RequestMapping("/mem_update")
	public String updateMember(Model model) {
		logger.info("MemberController 진입: updateMember");
		return "member/member_update";
	}
}
