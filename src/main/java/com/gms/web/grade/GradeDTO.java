package com.gms.web.grade;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Lazy @Component @Data
public class GradeDTO{
	
	private String mem_id, exam_date, score;
	private int gradeSeq;
	
}
