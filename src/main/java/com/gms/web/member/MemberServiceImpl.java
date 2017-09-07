package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	
	//public static MemberServiceImpl instance = new MemberServiceImpl();	
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}
	private MemberServiceImpl(){}
	
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("member service 진입");
		MemberDTO m=(MemberDTO)map.get("member");
		
		System.out.println("넘어온 회원 정보:"+m.toString());
		@SuppressWarnings("unchecked")
		
		List<MajorDTO>list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);
		
		return null;
	}

	@Override
	public List<?> getMembers(CommandDTO cmd) {
		return null;
	}

	@Override
	public String countMembers(CommandDTO cmd) {
		System.out.println("***count***");
		return null;
	}

	@Override
	public StudDTO findByID(CommandDTO cmd) {
		StudDTO member = new StudDTO();
		member = null;
		
		return member;
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName: "+cmd.getSearch());
		return null;
	}

	@Override
	public String modifyPw(MemberDTO bean) {

		String msg="";
		MemberDTO member = new MemberDTO();
		String rs = null;
		msg = (rs.equals("1"))?"update 성공":"update 실패";
		
		return msg;
	}

	@Override
	public String removeMember(CommandDTO cmd) {
		String msg="";
		String rs = null;
		msg = (rs.equals("1"))?"delete 성공":"delete 실패";
		
		return msg;
	}
	@Override
	public Map<String, Object> login(MemberDTO member) {	
		Map<String, Object> map = new HashMap<>();
		CommandDTO cmd = new CommandDTO();
		cmd.setSearch(member.getId());
		
		MemberDTO m = null;
		
		String page = (m!=null)?(m.getPw().equals(member.getPw()))?"main":"login_fail":"join";
		
		map.put("page", page);
		map.put("user", m);
		
		return map;
	}
}
