package com.gms.web.board;

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

import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberController;
import com.gms.web.member.StudDTO;


@RestController
public class BoardController {
private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired BoardMapper boardMapper;
	@Autowired GradeMapper gradeMapper;
	@Autowired MemberMapper memberMapper;
	@Autowired Command cmd;

	public @ResponseBody Map<?,?> post(){
		return null;
	}
	
	@RequestMapping("/list/{cate}")
	public @ResponseBody Map<?,?> boardList(@PathVariable String cate) { //@ResponseBody:jackson설정으로 인해 사용 가능
		logger.info("BoardController 진입: boardList");
		Map<String, Object> map = new HashMap<>();
		IListService listService = null;
		IGetService countService = null;
		
		switch (cate) {
		case "board":
			//controller가 직접 디비에서 값을 가져옴
			listService = (x)->{
				return boardMapper.selectList(cmd);
			};
			countService = (x)->{
				return boardMapper.count(cmd);
			};
			
			System.out.println(listService);
			map.put("result", "success");
			map.put("total", countService.execute(cmd));
			map.put("list", listService.execute(cmd));
			break;
		case "grade":
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
	
	@RequestMapping("/get/{cate}/{seq}")
	public @ResponseBody Map<?,?> get(@PathVariable String cate, @PathVariable String seq){
		logger.info("BoardController 진입: boardDetail");
		System.out.println("get:  "+cate+" // seq: "+seq);
		Map<String, Object> map = new HashMap<>();
		IGetService detailService = null;
		
		cmd.setSearch(seq);
		detailService = (x)->{
			return boardMapper.selectOne(cmd);
		};
		map.put("detail", detailService.execute(cmd));
			
		return map;
	}
	
	@RequestMapping(value="/put/board", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> put(@RequestBody Article art){
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
	
	@RequestMapping(value="/delete/board", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> delete(@RequestBody Article art){
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
