package com.gms.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.member.MemberController;

@RestController
public class BoardController {
private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired Command cmd;

	
	public @ResponseBody Map<?,?> post(){
		return null;
	}
	
	
	@RequestMapping("/get/{cate}/list")
	public @ResponseBody Map<?,?> boardList(@PathVariable String cate) { //@ResponseBody:jackson설정으로 인해 사용 가능
		logger.info("BoardController 진입: boardList");
		Map<String, Object> map = new HashMap<>();
		IListService listService = null;
		
		switch (cate) {
		case "board":
			cmd=null;
			/*listService = (x)->{
					return boardMapper.selectSome(cmd);
			};
			map.put("list", listService.execute(cmd));
			*/
			map.put("list", "게시판");
			break;
		case "grade":
			cmd=null;
			/*listService = (x)->{
					return gradeMapper.selectSome(cmd);
			};
			map.put("list", listService.execute(cmd));
			*/
			map.put("list", "성적관리");
			break;

		default:
			break;
		}
		
		map.put("msg", cate+"리스트");
		return map;
	}
	
	
	public @ResponseBody Map<?,?> get(){
		return null;
	}
	
	public @ResponseBody Map<?,?> put(){
		return null;
	}
	
	public @ResponseBody Map<?,?> delete(){
		return null;
	}
}
