package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.mbr.Member;
@Repository  //mapper는 mapperimpl이 없어서 
public interface BoardMapper {
    public void insert(Article m) ;
    public List<?> selectList(Map<?, ?> p) ;
    public List<?> selectSome(Map<?, ?> p) ;
    public Article selectOne(Article m) ;
    public int count(Map<?, ?> p) ;
    public void update(Map<?, ?> p) ;
    public void delete(Map<?, ?> p) ;
    public String login(Article m) ;
    public int countPaging();
	public int listSearchCount();
	public Article listCriteria();
	public Article listPage();
	public List<Article> listSearch();
}
