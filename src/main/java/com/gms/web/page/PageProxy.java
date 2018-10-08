package com.gms.web.page;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import lombok.Data;
@Data
public class PageProxy implements Proxy{
	private Pagination pagination;
	private HttpServletRequest request;
	
	@Override
	public void carryOut(HashMap<String, Object> map) {
		this.pagination = new Pagination();
		pagination.carryOut(map);
	}
}
