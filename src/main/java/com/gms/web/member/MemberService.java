package com.gms.web.member;

import java.util.*;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;

@Component
public interface MemberService {
	//setter void-> String : 사용자에게 결과후 성공여부 message 반환
	public int addMember(Map<?,?> map);
	public int modify(MemberDTO member);
	public int removeMember(Command cmd);
	//getter
	public List<?> getMembers(Command cmd);	//목록(list): MemberBean을 배열로 담음
	public List<?> findByName(Command cmd);
	public StudDTO findByID(Command cmd);
	public String count();
	
	public Map<String, Object> login(Command member); //(패스워드)은닉화를 위해 bean으로 담음
}
