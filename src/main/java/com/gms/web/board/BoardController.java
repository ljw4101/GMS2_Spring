package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.member.MemberController;

@Controller
@RequestMapping("/board")
public class BoardController {
private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("/board_add")
	public String addGrade(Model model) {
		logger.info("BoardController 진입: addGrade");
		return "board:board/board_write.tiles";
	}
	
	@RequestMapping("/board_list")
	public String listGrade(Model model) {
		logger.info("BoardController 진입: listGrade");
		return "board:board/board_list.tiles";
	}
	
	@RequestMapping("/board_detail")
	public String detailGrade(Model model) {
		logger.info("BoardController 진입: detailGrade");
		return "board:board/board_detail.tiles";
	}
	
	@RequestMapping("/board_update")
	public String updateGrade(Model model) {
		logger.info("BoardController 진입: updateGrade");
		return "board:board/board_update.tiles";
	}
}
