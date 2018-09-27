package com.gms.web.exm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Exam {
	String subSeq, exmSeq, term, score, id;
}
