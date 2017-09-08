package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;

@Repository
public interface MemberMapper {
	//setter void -> int 이유 : setter후 성공여부 반환: 오라클에서 숫자값으로 return함
	public String insert(Map<?, ?> map);
	public String update(MemberDTO member);	//pw
	public String delete(CommandDTO cmd);			//id
	//getter
	public List<?> selectAll(CommandDTO cmd);
	public String count(CommandDTO cmd);
	public StudDTO selectByID(CommandDTO cmd);
	public List<?> selectByName(CommandDTO cmd);
	
	//login용 selectByID
	public MemberDTO login(CommandDTO cmd);
}
