package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.member.MemberController;

@Controller
@RequestMapping("/grade")
public class GradeController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("/grade_add")
	public String addGrade(Model model) {
		logger.info("GradeController 진입: addGrade");
		return "grade:grade/grade_add.tiles";
	}
	
	@RequestMapping("/grade_list")
	public String listGrade(Model model) {
		logger.info("GradeController 진입: listGrade");
		return "grade:grade/grade_list.tiles";
	}
	
	@RequestMapping("/grade_detail")
	public String detailGrade(Model model) {
		logger.info("GradeController 진입: detailGrade");
		return "grade:grade/grade_detail.tiles";
	}
	
	@RequestMapping("/grade_update")
	public String updateGrade(Model model) {
		logger.info("GradeController 진입: updateGrade");
		return "grade:grade/grade_update.tiles";
	}
}
