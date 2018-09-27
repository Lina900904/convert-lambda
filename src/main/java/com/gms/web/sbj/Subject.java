package com.gms.web.sbj;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.exm.Exam;

import lombok.Data;

@Component
@Data @Lazy
public class Subject {
	String seq, sbjName;
}
