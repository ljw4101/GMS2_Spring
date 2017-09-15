package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;

@Repository
public interface MemberMapper {
	public int insert(MemberDTO member);
	public int update(MemberDTO member);
	public int delete(CommandDTO cmd);
	//getter
	public List<?> selectAll(CommandDTO cmd);
	public String count();
	public StudDTO selectByID(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	
	//login용 selectByID
	public MemberDTO login(CommandDTO cmd); //generic으로 쓰기 위해 CommandDTO으로 변경 
}
