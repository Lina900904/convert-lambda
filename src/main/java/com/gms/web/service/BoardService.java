package com.gms.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.domain.ArticleDTO;
@Component //service는 serviceimpl이 있어서 
public interface BoardService {
    public void add(ArticleDTO p) ;
    public List<?> list(Map<?, ?> p) ;
    public List<?> search(Map<?, ?> p);
    public ArticleDTO retrieve(ArticleDTO m);
    public int count(Map<?, ?> p) ;
    public void modify(Map<?, ?> p) ;
    public void remove(Map<?, ?> p) ;
    public boolean login(ArticleDTO p);
}
