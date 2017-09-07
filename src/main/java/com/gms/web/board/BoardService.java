package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.ArticleDTO;
import com.gms.web.member.MemberDTO;
@Component
public interface BoardService {
	//setter : 사용자에게 결과후 성공여부 message 반환
	public String write(ArticleDTO bean);
	public String modify(ArticleDTO bean);
	public String remove(int seq);
	//getter
	public List<ArticleDTO> list();
	public String countArticles();
	public ArticleDTO findBySeq(int seq);
	public List<ArticleDTO> findById(String id);	
}
