package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Lazy @Component @Data
public class MemberDTO {
	//DB에 저장되는 값만 정의해야 함
	private String id, pw, name, phone, email, major, profile, birthday, gender, regdate;
	
	@Override
	public String toString() {
		return "MemberBean [id=" + id + ", pw=" + pw + ", name=" + name + ", phone=" + phone + ", email=" + email + ", major=" + major + ", profile=" + profile + ", birthday=" + birthday + ", gender=" + gender + ", regdate="+ regdate +"]";
	}
}
