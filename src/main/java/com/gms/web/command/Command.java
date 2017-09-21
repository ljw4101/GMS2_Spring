package com.gms.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import com.gms.web.constant.Extension;
import com.gms.web.constant.Path;
import com.gms.web.member.MemberDTO;

import lombok.Getter;
import lombok.Setter;

@Lazy @Component
public class Command implements Commandable{
	@Getter
	protected String action, pageNumber, view, column, search;	//상속 가능하도록 protected로 설정
	
	@Getter @Setter
	protected String dir, page, startRow, endRow;
	
	protected MemberDTO member;
		
	public void setColumn(String column){
		this.column = (column==null)?"none":column;
		System.out.println("Command/column: "+this.column);
	}
	
	public void setSearch(String search){
		this.search = (search==null)?"none":search;
		System.out.println("Command/search: "+search);
	}
	
	public void setPageNumber(String pageNumber){
		this.pageNumber =  (pageNumber==null)?"1":pageNumber;
		System.out.println("Command/페이지 번호: "+pageNumber);
	}
	
	public void setAction(String action){
		this.action = (action==null)?"move":action;
		System.out.println("Command/액션: "+action);
	}
	
	@Override
	public void process() {	//setView 역할
		this.view =  (dir.equals("home"))?"/WEB-INF/view/common/home.jsp":Path.VIEW + dir + Path.SEPARATOR + page + Extension.JSP;
		System.out.println("Command/이동페이지: "+view);
	}

	@Override
	public String toString() {
		return "Command [DEST="+dir+"/"+page+".jsp, ACTION="+action+"]";
	}
}
