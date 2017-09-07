package com.gms.web.compiex;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.gms.web.porducts.PathDTO;

@Lazy @Component
public class PathFactory {
	public static PathDTO create() {
		PathDTO path = new PathDTO();
		path.setCtx(
				((ServletRequestAttributes)RequestContextHolder.currentRequestAttributes())
				.getRequest()
				.getContextPath());
		path.setImg(path.getCtx()+"/resources/img");
		path.setCss(path.getCtx()+"/resources/css");
		path.setJs(path.getCtx()+"/resources/js");
		return path;
	}
}
