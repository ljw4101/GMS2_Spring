package com.gms.web.proxy;

import org.springframework.stereotype.Component;

//page를 누르지 않으면 실행되지 않아야 된다.
//page의 set
//화면에 뿌려진 후에 작동해야 하므로 디비 갔다온 후
@Component
public class BlockHandler{
	public static int[] attr(PageProxy pxy){
		int[] result = new int[6];
		int theNumberOfPages=0, startPage = 0, endPage = 0;
		
		theNumberOfPages = (pxy.getTheNumberOfRows() % pxy.getPageSize()) == 0? 
				pxy.getTheNumberOfRows() / pxy.getPageSize() : pxy.getTheNumberOfRows() / pxy.getPageSize() + 1;
		
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber()-1) % pxy.getPageSize());
		endPage = (startPage + pxy.getBlockSize()-1 <= theNumberOfPages) ?
				startPage + pxy.getBlockSize()-1 : theNumberOfPages;
		
		result[0] = pxy.getPageNumber();
		result[1] = theNumberOfPages;
		result[2] = startPage;
		result[3] = endPage;
		result[4] = startPage - (theNumberOfPages/pxy.getBlockSize()); //prevBlock 
		result[5] = startPage + (theNumberOfPages/pxy.getBlockSize()); //nextBlock
		
		System.out.println("*** BlockHandler ***");
		System.out.println("getPageNumber: "+result[0]+" / theNumberOfPages: "+result[1]);
		System.out.println("startPage: "+result[2]+" / endPage: "+result[3]);
		System.out.println("prevBlock: "+result[4]+" / nextBlock: "+result[5]);
		
		return result;
	}

}
