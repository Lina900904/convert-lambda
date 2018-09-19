package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Util2 {

		public Function<Member, Member> ageAndGender = (Member mbr)->{
			if(mbr.getSsn().substring(7,8)=="1") {
	    		mbr.setGender("남자");
			}else {
				mbr.setGender("여자");
			}
	     	SimpleDateFormat date = new SimpleDateFormat("yyyy");
	     	String year=date.format(new Date());
			 int age = Integer.parseInt(year)- 1899- (Integer.parseInt(mbr.getSsn().substring(0,2)));
			 mbr.setAge(String.valueOf(age));
			return mbr;
		};

	
}
