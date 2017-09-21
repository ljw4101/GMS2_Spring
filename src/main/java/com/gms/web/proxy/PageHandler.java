package com.gms.web.proxy;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;

//한 페이지의 rownum 범위
//DB가기 전
@Component
public class PageHandler {
	public static Command attr(PageProxy pxy){ //dependance: 객체를 전달
		Command cmd = new Command();
		
		System.out.println("============1 Command getPageNumber:" +pxy.getPageNumber());
		System.out.println("============1 Command getTheNumberOfRows:" +pxy.getTheNumberOfRows());
		System.out.println("============1 Command getPageSize:" +pxy.getPageSize());
		
		if(pxy.getPageNumber() <= pxy.getTheNumberOfRows()/pxy.getPageSize()+1){
			if(pxy.getPageNumber() == 1){
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}else{
				cmd.setStartRow(String.valueOf((pxy.getPageNumber() - 1)*pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		
		System.out.println("*** PageHandler ***");
		System.out.println("startRow: "+cmd.getStartRow()+" / endRow: "+cmd.getEndRow());
		
		return cmd;
	}
}
