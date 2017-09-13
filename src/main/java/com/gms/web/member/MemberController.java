package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.websocket.Session;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.compiex.PathFactory;
import com.gms.web.proxy.BlockHandler;
import com.gms.web.proxy.PageHandler;
import com.gms.web.proxy.PageProxy;

@Controller //context 객체가 스캔해서 springbean으로 만듦 - context 내부에 위치
@SessionAttributes("stud")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired BlockHandler blockHandler;
	@Autowired PageHandler pageHandler;
	@Autowired PageProxy pxy;
	
	@RequestMapping("/member_list/{num}/{param}")
	public String listMember(Model model, @PathVariable String num, @PathVariable String param) {
		logger.info("MemberController 진입: listMember "+num+"/"+param);
		pxy.setPageSize(5);
		pxy.setBlockSize(5);
		pxy.setPageNumber(Integer.parseInt(num));
		
		if(param.equals("null")) {
			cmd.setSearch("%");
		}else {
			cmd.setSearch("%"+param+"%");
		}
		
		int count = Integer.parseInt(service.count());
		pxy.setTheNumberOfRows(count);
		model.addAttribute("count", service.count());
		logger.info("listMember.size() is {}", service.count());
		
		int[] result = new int[6];
		int theNumberOfPages=0, startPage=0, endPage=0;
	      theNumberOfPages = (pxy.getTheNumberOfRows()%pxy.getPageSize()) == 0? pxy.getTheNumberOfRows()/pxy.getPageSize() : pxy.getTheNumberOfRows()/pxy.getPageSize()+1;
	      startPage = pxy.getPageNumber() - ((pxy.getPageNumber()-1)%pxy.getBlockSize());
	      endPage = (startPage + pxy.getBlockSize()-1 <= theNumberOfPages) ? startPage + pxy.getBlockSize()-1 : theNumberOfPages;
	      result[0]=pxy.getPageNumber();
	      result[1]=theNumberOfPages;
	      result[2]=startPage;
	      result[3]=endPage;
	      result[4]=(startPage-(theNumberOfPages/pxy.getBlockSize())>0)?1:0;
	      result[5]=startPage+pxy.getBlockSize();
	      if(pxy.getPageNumber()<=pxy.getTheNumberOfRows()/pxy.getPageSize()+1){
	         if(pxy.getPageNumber()==1){
	            cmd.setStartRow("1");
	            cmd.setEndRow(String.valueOf(pxy.getPageSize()));
	         }else {
	            cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1)*pxy.getPageSize()+1));
	            cmd.setEndRow(String.valueOf(pxy.getPageNumber()*pxy.getPageSize()));
	         }
	      }
	      
	      @SuppressWarnings("unchecked")
		  List<StudDTO> list = (List<StudDTO>) service.getMembers(cmd);
	      pxy.execute(model, result, list);
		
		return "move:member/member_list.tiles";
	}
	
	
	@RequestMapping("/member_detail/{param}")
	public String detailMember(Model model, @PathVariable String param) {
		logger.info("MemberController 진입: detailMember: "+param);
		cmd.setSearch(param);
		model.addAttribute("stud",service.findByID(cmd));
		
		return "move:member/member_detail.tiles";
	}
	
	
	@RequestMapping("/member_add")
	public String addMember(@ModelAttribute MemberDTO member) {
		logger.info("MemberController 진입: addMember");
		
		Map<String,Object> map = new HashMap<>();
		map.put("member", member);
		//map.put("major", list);
		service.addMember(map);

		return "redirect:/member/member_list/1/null";
	}
	
	
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String updateStudent(@ModelAttribute MemberDTO member) {
		logger.info("MemberController 진입: updateMember: ");
		service.modify(member);
		
		return "redirect:/member/member_detail/"+member.getId();
	}
	
	
	@RequestMapping("/member_delete/{param}")
	public String deleteMember(Model model, @PathVariable String param) {
		logger.info("MemberController 진입: deleteMember: "+param);
		cmd.setSearch(param);
		service.removeMember(cmd);
		String ctx = PathFactory.create().getCtx();
		
		return "redirect:/member/member_list/1/null"; //redirect: Tiles사용 X 
	}
}
