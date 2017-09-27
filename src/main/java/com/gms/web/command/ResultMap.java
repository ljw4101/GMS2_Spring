package com.gms.web.command;

import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Data
public class ResultMap {
	private String seq, count, id, title, content, regdate, hitcount, mem_id, mem_name;
}
