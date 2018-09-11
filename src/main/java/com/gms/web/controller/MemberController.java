package com.gms.web.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;


@Controller
@RequestMapping("/member") //root-context공간에 저장
@SessionAttributes("user") //user란 세션공간
public class MemberController {
	//static final Logger Logger = LoggerFactory.getLogger();
	@Autowired MemberDTO member;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute MemberDTO member) {
		memberService.add(member);
		System.out.println("member is "+ member);
		return "redirect:/move/auth/member/login";
	}
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(Model model, 
			@ModelAttribute("member") MemberDTO member) {
		
		String login ="";
		if(memberService.login(member)) {
			login =  "login__success";
			model.addAttribute("user", memberService.retrieve(member));
		}else {
			 login =  "redirect:/move/auth/member/login";
		}
		System.out.println("login값~~"+member);
		model.asMap().get("user");
		return login;
	}
	
	@RequestMapping("/retrieve")
	public void retrieve(Model model,
			@ModelAttribute("member") MemberDTO member) {
		System.out.println("member값"+member);
		
		
	}
	@RequestMapping(value="/modify", method = RequestMethod.POST)
	public String modify(Model model,
			@ModelAttribute("member") MemberDTO member,
			@ModelAttribute("user") MemberDTO user) {
		member.setId(user.getId());
		memberService.modify(member);
		model.addAttribute("user", memberService.retrieve(member));
		
		System.out.println("modify member값"+member);
		return "login__success";
		
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void serarch() {}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping(value="/remove", method = RequestMethod.POST)
	public String remove( Model model, 
			@ModelAttribute MemberDTO member,
			@ModelAttribute("user") MemberDTO user) {
		member.setId(user.getId());
		memberService.remove(member);
		System.out.println("remove member값"+member);
		return "redirect:/";
		
	}
	
	@RequestMapping("/logout")
	public String logout() {
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}

	
	
	
	
	
	
}