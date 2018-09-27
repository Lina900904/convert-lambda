package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
                                                                                                     
@Data @Component @Lazy
public class Member {
	private String id, password,ssn,name, gender, roll,   teamId, age;
}
