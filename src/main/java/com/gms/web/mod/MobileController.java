package com.gms.web.mod;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.board.Article;
import com.gms.web.board.IDeleteService;
import com.gms.web.board.IGetService;
import com.gms.web.board.IListService;
import com.gms.web.board.IPutService;
import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberController;
import com.gms.web.member.StudDTO;

//Mobile은 별도로 진행하기 위해 만듦
@RestController
public class MobileController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired MemberMapper memberMapper;
	@Autowired Command cmd;

	public @ResponseBody Map<?,?> post(){
		return null;
	}
	
	@RequestMapping("/list/mob")
	public @ResponseBody Map<?,?> boardList() { //@ResponseBody:jackson설정으로 인해 사용 가능
		logger.info("BoardController 진입: boardList");
		Map<String, Object> map = new HashMap<>();
		IListService listService = null;
		IGetService countService = null;
		
		
		return map;
	}
	
	@RequestMapping("/get/mob/{seq}")
	public @ResponseBody Map<?,?> get(@PathVariable String seq){
		logger.info("BoardController 진입: boardDetail");
		System.out.println("seq: "+seq);
		Map<String, Object> map = new HashMap<>();
		IGetService detailService = null;
		
		cmd.setSearch(seq);
		detailService = (x)->{
			return boardMapper.selectOne(cmd);
		};
		map.put("detail", detailService.execute(cmd));
			
		return map;
	}
	
	@RequestMapping(value="/put/mob/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> put(@RequestBody Article art, @PathVariable String seq){
		logger.info("BoardController 진입: boardPut : Update");
		IPutService updateService = null;
		Map<String, Object> map = new HashMap<>();
		
		cmd.setSearch(String.valueOf(art.getArticleSeq()));
		cmd.setDir(art.getTitle());
		cmd.setAction(art.getId());
		cmd.setPage(art.getContent());
		updateService = (x)->{
			boardMapper.update(cmd);
		};
		updateService.execute(cmd);
		map.put("msg", "success");
		return map;
	}
	
	@RequestMapping(value="/delete/mob/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> delete(@RequestBody Article art, @PathVariable String seq){
		logger.info("BoardController 진입: boardDelete : delete");
		IGetService memberService = null;
		IDeleteService deleteService = null;
		Map<String, Object> map = new HashMap<>();
		StudDTO member = null;
		
		System.out.println("parameter: "+art.getArticleSeq()+"/"+art.getTitle()+"/"+art.getId());
		
		//pw 확인
		cmd.setSearch(art.getId());
		memberService = (x)->{
			return memberMapper.selectByID(cmd);
		};
		member = (StudDTO)memberService.execute(cmd);
		System.out.println("member password: "+member.getPw());
		
		//delete
		String result = "";
		if(art.getTitle().equals(member.getPw())){
			cmd.setSearch(String.valueOf(art.getArticleSeq()));
			System.out.println("success: "+cmd.getSearch());
			
			deleteService = (x)->{
				boardMapper.delete(cmd);
			};
			deleteService.execute(cmd);
			
			result = "success";
		}else {
			result = "fail";
		}
		
		map.put("msg", result);
		return map;
	}
}
