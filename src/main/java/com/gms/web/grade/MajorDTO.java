package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Lazy @ Component @Data
public class MajorDTO {

	private String majorId, title, memId, subjId;

	@Override
	public String toString() {
		return "MajorBean [majorId=" + majorId + ", title=" + title + ", memId=" + memId + ", subjId=" + subjId + "]";
	}
}
