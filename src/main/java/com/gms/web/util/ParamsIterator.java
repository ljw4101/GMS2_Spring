package com.gms.web.util;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

@Component
public class ParamsIterator { //Iterator
	public static Map<?,?> execute(HttpServletRequest request){	//반환값이 뭐든간에 map형식을 맞춰주기 위함
		Map<String,String> result=new HashMap<>(); //결과 map(memberBean과 MajorBean 내용들) 
		Map<String,String[]> map=request.getParameterMap(); //member_add.jsp에서 넘겨받은 것들
		Set<Entry<String, String[]>> set=map.entrySet();	//member_add.jsp에서 넘겨받은 것만 가져온다. (set 순서 없이 무작위로 담긴다.)
		Iterator<Map.Entry<String, String[]>> it = set.iterator(); //getParameterMap을 iterator가 순차접근
		
		String params[]=new String[set.size()];	//
		int i=0;
		while(it.hasNext()){	//it.hasNext() : iterator 접근할 수 있는 값을 있을때만 loop(유,무)
		    Map.Entry<String, String[]> e = it.next();
		    params[i]=e.getKey();
		    i++;
		}
		for(i=0;i<params.length;i++){
			if(map.get(params[i]).length==1){
				result.put(params[i], map.get(params[i])[0]);	//subject 이외의 것들
			}else{
				String temp="";
				for(int j=0;j<map.get(params[i]).length;j++){
					temp+=map.get(params[i])[j]+",";
				}
				result.put(params[i], temp);	//subject
			}
		}
		return result;
	}
}
