package com.gms.web.board;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IGetService {
	public Object execute(Object o);
}
