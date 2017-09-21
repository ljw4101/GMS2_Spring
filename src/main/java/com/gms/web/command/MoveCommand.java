package com.gms.web.command;

import org.springframework.stereotype.Component;

//생산품(결과)
public class MoveCommand extends Command{
	public MoveCommand(String dir, String action, String page){
		super.dir=dir;
		super.action=action;
		super.page=page;
		super.process();
	}
}
