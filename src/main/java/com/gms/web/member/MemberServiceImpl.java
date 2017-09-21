package com.gms.web.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.Command;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;
import com.gms.web.member.MemberService;

@Service
//@Transactional : 걸리지 않아도 될 것에 걸리기 때문에 느려짐 따라서 걸어야 할 매소드에 건다.
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired MemberDTO member;
	@Autowired GradeMapper gMapper;

	//public static MemberServiceImpl instance = new MemberServiceImpl();	
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}
	private MemberServiceImpl(){}
	
	@Override @Transactional
	public int addMember(Map<?,?> map) {
		System.out.println("member service 진입");
		
		member = (MemberDTO)map.get("member");
		@SuppressWarnings("unchecked")
		List<MajorDTO> majorList = (List<MajorDTO>)map.get("major");
		
		System.out.println("ID= "+member.getId());
		System.out.println("major= "+majorList);

		mapper.insert(member);
		gMapper.insertMajor(majorList);
		
		int rs=0;
		return rs; //map
	}

	@Override
	public List<?> getMembers(Command cmd) {
		return mapper.selectAll(cmd);
	}

	@Override
	public String count() {
		String count = mapper.count();
		logger.info("coutn is {}", count);
		return count;
	}

	@Override
	public StudDTO findByID(Command cmd) {
		return mapper.selectByID(cmd);
	}

	@Override
	public List<?> findByName(Command cmd) {
		System.out.println("findByName: "+cmd.getSearch());
		return null;
	}

	@Override
	public int modify(MemberDTO bean) {		
		return mapper.update(bean);
	}

	
	@Override
	public int removeMember(Command cmd) {
		return mapper.delete(cmd);
	}
	
	
	@Override
	public Map<String, Object> login(Command cmd) {	
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
