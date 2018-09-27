package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.page.Pagination;



@RestController
public class BoardCtrl {
	static final Logger Logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired BoardMapper boardMapper;
	@Autowired Board board;
	@Autowired Pagination page;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board> 
	list(){
		Logger.info("\n=================== boardController");
		page.carryOut("1/60");
		Util.log.accept("getBeginPage :"+page.getBeginRow());
		Util.log.accept("getBeginPage :"+page.getEndRow());
		List<Board> ls = boardMapper.listAll(page);
		
		Util.log.accept("게시글 리스트:"+ls);
		
		return ls;
		
	}
	
}
