package com.gms.web.common;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/move")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	
	@RequestMapping("/{dir}/{page}")
	public String movePage(@PathVariable String dir, @PathVariable String page, Model model) {

		logger.info("CommonController 진입: movePage");
		return "move:"+dir+"/"+page+".tiles";
	}
}
