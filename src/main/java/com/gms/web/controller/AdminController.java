package com.gms.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@RequestMapping("/board")
public class AdminController {
	public static void main(String[] args) {
		
	}
	class Box<T>{
		T item;

		public T getItem() {
			return item;
		}

		public void setItem(T item) {
			this.item = item;
		}
	}

}

