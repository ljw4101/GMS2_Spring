package com.gms.web.board;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.gms.web.board.ArticleDTO;

@Repository
public interface BoardDAO {
	//setter void -> int 이유 : setter후 성공여부 반환: 오라클에서 숫자값으로 return함
	public String insert(ArticleDTO bean);
	public String update(ArticleDTO bean);
	public String delete(int seq);
	//getter
	public List<ArticleDTO> selectAll();
	public String count();
	public ArticleDTO selectBySeq(int seq); //primary key 리턴타입은 Bean이다.
	public List<ArticleDTO> selectById(String id);
}
