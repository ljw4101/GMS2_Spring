package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.command.Command;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudDTO;

@Repository
public interface MobileMapper {
	public int booking(MemberDTO member);  //insert
	public List<?> selectList(Command cmd);
	public StudDTO selecOne(Command cmd);
	public String count();
	public int delete(Command cmd);
}
