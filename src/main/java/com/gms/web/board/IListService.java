package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
@FunctionalInterface
public interface IListService {
	public List<?> execute(Object o);
}
