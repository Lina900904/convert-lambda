package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;abstract


@Component //스프링에서 빈으로 만듬
@Data //게터세터
public class ImageDTO {
	private String imgseq;
	private String imgname;
	private String extension;
	private String id;
}
