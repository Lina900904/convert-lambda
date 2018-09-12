package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component
public interface MemberService {
	    public void add(Member m) ;
	    public List<?> list(Map<?, ?> p) ;
	    public List<?> search(Map<?, ?> p);
	    public Member retrieve(String p);
	    public int count(Map<?, ?> p) ;
	    public void modify(Member p) ;
	    public void remove(Member p) ;
	    public String login(Member p);

}
