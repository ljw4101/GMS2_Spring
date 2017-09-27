package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Lazy @Component @Data
public class StudDTO {
	private String num, pw, id, name, ssn, phone, email, subjs, regdate, profile;
}
