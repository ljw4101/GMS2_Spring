package com.gms.web.porducts;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

//@Lazy : PathDTO가 호출될 떄 객체화 됨 (@Component 같음)
@Lazy @Component @Data
public class PathDTO {
	private String ctx, img, js, css;

}
