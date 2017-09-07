package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;
import com.gms.web.board.BoardDAO;
import com.gms.web.board.ArticleDTO;

@Service
public class BoardServiceImpl implements BoardService{
	
	public static BoardServiceImpl getInstance() {
		return new BoardServiceImpl();
	}
	private BoardServiceImpl(){}
	
	@Override
	public String write(ArticleDTO bean) {
		String rs = null;
		String msg = (rs.equals("1"))?"게시글 등록 성공":"게시글 등록 실패";
		return msg;
	}

	@Override
	public String modify(ArticleDTO bean) {
		String rs = null;
		String msg = (rs.equals("1"))?"게시글 수정 성공":"게시글 수정 실패";
		return msg;
	}

	@Override
	public String remove(int seq) {
		String rs = null;
		String msg = (rs.equals("1"))?"게시글 삭제 성공":"게시글 삭제 실패";
		return msg;
	}

	@Override
	public List<ArticleDTO> list() {
		return null;
	}

	@Override
	public String countArticles() {
		return null;
	}

	@Override
	public ArticleDTO findBySeq(int seq) {
		return null;
	}

	@Override
	public List<ArticleDTO> findById(String id) {
		return null;
	}
}
