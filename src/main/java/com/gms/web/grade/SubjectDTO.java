package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Lazy @Component @Data
public class SubjectDTO {
	private String subjId, title;

	@Override
	public String toString() {
		return "SubjectBean [subjId=" + subjId + ", title=" + title + "]";
	}
}
