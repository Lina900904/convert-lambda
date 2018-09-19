package com.gms.web.brd;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/board")
public class BoardCtrl {
	@Autowired Article article;
	//@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute Article article, Model model) {
		System.out.println("article is "+ article);
		return "redirect:/move/auth/article/login";
	}
	
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void serarch() {}
	@RequestMapping("/retrieve")
	public void retrieve(@ModelAttribute Article article, Model model) {
		System.out.println("article값"+article);
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping(value="/modify/id", method = RequestMethod.POST)
	public void modify(@ModelAttribute Article article, @PathVariable String id ) {
		Map<String, Object> p = new HashMap<String, Object>();
	//	article.setId(id);
		System.out.println(id);
		p.put("article",article);
		
		System.out.println("modify article값"+article);
		
	}
	@RequestMapping(value="/remove", method = RequestMethod.POST)
	public void remove(@ModelAttribute Article article, Model model) {
		
		Map<String, Object> p = new HashMap<String, Object>();
		p.put("article",article);
		System.out.println("remove article값"+article);
		
	}
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(@ModelAttribute Article article, Model model) {
		String login ="";
		/*if(articleService.login(article)) {
			model.addAttribute("article",articleService.retrieve(article));
			login =  "login__success";
		}else {
			 login =  "redirect:/move/auth/article/login";
		}*/
		System.out.println("login값~~"+login);
		return login;
	}
	@RequestMapping("/logout")
	public String logout() {
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}

	
}
