package com.gms.web.grade;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.gms.web.grade.GradeDTO;

@Repository
public interface GradeDAO {
	//setter void -> int 이유 : setter후 성공여부 반환: 오라클에서 숫자값으로 return함
	public String insert(GradeDTO bean);
	public String update(GradeDTO bean);
	public String delete(int seq);
	//getter
	public List<GradeDTO> selectAll();
	public String count();
	public GradeDTO selectBySeq(int seq); //primary key 리턴타입은 Bean이다.
	public List<GradeDTO> selectById(String id);
}
