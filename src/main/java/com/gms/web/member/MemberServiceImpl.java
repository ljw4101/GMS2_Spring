package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	
	//public static MemberServiceImpl instance = new MemberServiceImpl();	
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}
	private MemberServiceImpl(){}
	
	@Override
	public int addMember(Map<String, Object> map) {
		System.out.println("member service 진입");
		
		MemberDTO bean = (MemberDTO)map.get("member");
		System.out.println("넘어온 회원 정보:"+bean.toString());
		
		/*@SuppressWarnings("unchecked")
		List<MajorDTO>list=(List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강과목:"+list);*/
		
		return mapper.insert(bean); //map
	}

	@Override
	public List<?> getMembers(CommandDTO cmd) {
		return mapper.selectAll(cmd);
	}

	@Override
	public String count() {
		String count = mapper.count();
		logger.info("coutn is {}", count);
		return count;
	}

	@Override
	public StudDTO findByID(CommandDTO cmd) {
		return mapper.selectByID(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName: "+cmd.getSearch());
		return null;
	}

	@Override
	public int modify(MemberDTO bean) {		
		return mapper.update(bean);
	}

	
	@Override
	public int removeMember(CommandDTO cmd) {
		return mapper.delete(cmd);
	}
	
	
	@Override
	public Map<String, Object> login(CommandDTO cmd) {	
		Map<String, Object> map = new HashMap<>();
		member = mapper.login(cmd);
		
		String page="", result="";
		if(member!=null){
			if(member.getPw().equals(cmd.getAction())) {
				page = "auth:common/main.tiles";
				result = "success";
			}else {
				page = "auth:common/login.tiles";
				result = "비밀번호가 틀렸습니다.";
			}
		}else {
			page = "auth:common/join.tiles";
			result = "회원가입이 필요합니다.";
		}
		 
		System.out.println("result== "+result);
		
		map.put("result", result);
		map.put("page", page);
		map.put("user", member);
		
		return map;
	}
}
