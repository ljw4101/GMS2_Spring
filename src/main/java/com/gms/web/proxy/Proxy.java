package com.gms.web.proxy;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import lombok.Getter;

//짐꾼 & handler 와 짝꿍
@Component
public abstract class Proxy {
	@Getter	//setter면 보안이 깨짐
	HttpServletRequest request; 
	
	//생성자에 객체 생성이유: 공유
	public Proxy(HttpServletRequest request){
		this.request=request;
	}
}
