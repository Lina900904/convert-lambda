package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberCtrl;
import com.gms.web.page.Pagination;



@RestController
public class BoardCtrl {
	static final Logger Logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired BoardMapper boardMapper;
	@Autowired Board board;
	@Autowired MemberCtrl member;
	@Autowired Pagination page;
	@Autowired HashMap<String, Object> map;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody HashMap<String, Object> 
	list(@PathVariable String pageNo){
		Logger.info("\n=================== boardController");
		Util.log.accept("넘어온페이지 :"+pageNo);
		map.clear();
		map.put("pageNum", Integer.parseInt(pageNo));
		map.put("count", boardMapper.countAll());
		page.carryOut(map);
		Util.log.accept("boardMapperCount :"+boardMapper.countAll());
		Util.log.accept("AllList :"+boardMapper.listAll(page));
		List<Board> ls = boardMapper.listAll(page);
		Util.log.accept("countRow::"+page.getCount());
		Util.log.accept("exisNext:"+page.isExisNext());
		Util.log.accept("existPrev:"+page.isExistPrev());
		Util.log.accept("beginRow:"+page.getBeginRow());
		Util.log.accept("endRow:"+page.getEndRow());
		Util.log.accept("prevBlock:"+page.getPrevBlock());
		map.clear();
		map.put("list", ls);
		
		map.put("page", page);
		
		return map;
		
	}
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody HashMap<String, Object> 
		myList(@PathVariable String pageNo, String id){
		HashMap<String, Object>map= new HashMap<>();
		map.put("id", id);
		Logger.info("\n=================== boardController");
		Util.log.accept("넘어온페이지 MyList :"+pageNo);
		Util.log.accept("MBR넘어옴 :"+map.get("MBR"));
		Util.log.accept("MBR넘어옴 :"+map.get("id"));
		map.clear();
		map.put("pageNum", Integer.parseInt(pageNo));
		map.put("count", boardMapper.countBoard());
		page.carryOut(map);
		Util.log.accept("MBR넘어옴 :"+map.get("MBR"));
		//List<Board> ls = boardMapper.myList(map.get("MBR"));
		Util.log.accept("boardMapperCount :"+boardMapper.countBoard());
		Util.log.accept("countRow::"+page.getCount());
		Util.log.accept("exisNext:"+page.isExisNext());
		Util.log.accept("existPrev:"+page.isExistPrev());
		Util.log.accept("beginRow:"+page.getBeginRow());
		Util.log.accept("endRow:"+page.getEndRow());
		Util.log.accept("prevBlock:"+page.getPrevBlock());
		map.clear();
		//map.put("list", ls);
		
		map.put("page", page);
		
		return map;
		
	}
	
}
