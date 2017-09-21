package com.gms.web.board;

import java.util.List;
import org.springframework.stereotype.Component;

@Component
public interface BoardService {
	public void post(Object o);		//insert
	public List<?> list(Object o);	//get:read
	public Object get(Object o);	//read
	public void put(Object o);		//update
	public void delete(Object o);	//delete
}
