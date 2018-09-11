package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
@Repository
public interface MemberMapper {
    public void insert(Member m) ;
    public List<?> selectList(Map<?, ?> p) ;
    public List<?> selectSome(Map<?, ?> p) ;
    public Member selectOne(Member m) ;
    public int count(Map<?, ?> p) ;
    public void update(Member p) ;
    public void delete(Member p) ;
    public String login(Member m) ;
    public int  countpage() ;
    public String exist(String p);
}
