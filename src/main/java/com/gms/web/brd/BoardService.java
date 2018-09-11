package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component //service는 serviceimpl이 있어서 
public interface BoardService {
    public void add(Article p) ;
    public List<?> list(Map<?, ?> p) ;
    public List<?> search(Map<?, ?> p);
    public Article retrieve(Article m);
    public int count(Map<?, ?> p) ;
    public void modify(Map<?, ?> p) ;
    public void remove(Map<?, ?> p) ;
    public boolean login(Article p);
}
