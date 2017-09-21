package com.gms.web.compiex;

import org.springframework.stereotype.Component;

import com.gms.web.command.*;
import com.gms.web.constant.Action;

//CommonController 관계: 명렁어 생성(메뉴얼 작성자) / MoveCommand 관계: 생산자
@Component
public class CommandFactory {
	public static Command createCommand(String dir, String action, String page, String pageNumber, String column, String search){
		Command cmd=null; //sub객체를 인스턴스화하기 위해 생성
		
		if(action==null){ action=Action.MOVE; }
		
		switch(action){
		case Action.MOVE:
		case Action.LOGIN:
		case Action.LOGOUT:
		case Action.DETAIL:
		case Action.INSERT:
		case Action.UPDATE:
		case Action.DELETE:
			cmd = new MoveCommand(dir, action, page); //다형성
			break;
		case Action.LIST:
			cmd = new ListCommand(dir, action, page, pageNumber);
			break;
		case Action.SEARCH:;
			cmd = new SearchCommand(dir, action, page, pageNumber, column, search);
			break;
		default:
			System.out.println("CommandFactory Fail");
			break;
		}
		return cmd;
	}
}
