package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.Command;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;

@Repository
public interface MemberMapper {
	public int insert(MemberDTO member);
	public int update(MemberDTO member);
	public int delete(Command cmd);
	//getter
	public List<?> selectAll(Command cmd);
	public String count();
	public StudDTO selectByID(Command cmd);
	public List<?> selectByName(Command cmd);
	
	//login용 selectByID
	public MemberDTO login(Command cmd); //generic으로 쓰기 위해 CommandDTO으로 변경 
}
