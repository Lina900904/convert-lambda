package com.gms.web.mbr;

import java.util.function.Function;
import java.util.function.Predicate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.Util;
import java.util.logging.*;


@RestController
@RequestMapping("/member") //root-context공간에 저장
@SessionAttributes("user") //user란 세션공간
public class MemberCtrl {	
	static final Logger Logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired MemberMapper mbrMapper;
	@Autowired Member member;
	//@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute Member member) {
		//memberService.add(member);
		System.out.println("member is "+ member);
		return "redirect:/move/auth/member/login";
	}
	
	@PostMapping(value="/login")
	public String login(Model model, 
			@ModelAttribute("member") Member param) {
		Logger.info("\n=================== memberController");
		// Predicate<String> p = s->!s.equals(""); 
		System.out.println(param.getId());
		
	
		String view = "login_failed";
		System.out.println(view);
		if(Util.notNull.test(mbrMapper.exist(param.getId()))) {
			Function<Member,String> f = (t)->{ //t=member 
				return mbrMapper.login(t);
			};
			view = (f.apply(param).equals("1")) ? 
				"login__success":
				"login_failed";
		
			
		}
		member=(Predicate.isEqual("login__success").test(view))?
			mbrMapper.selectOne(param.getId()):
			new Member();
			//Util.log.accept(member.toString());
			System.out.println(member);
	
		return view;
	}
	
	@RequestMapping("/retrieve")
	public void retrieve(Model model,
			@ModelAttribute("member") Member member) {
		System.out.println("member값"+member);
		
		
	}
	@RequestMapping(value="/modify", method = RequestMethod.POST)
	public String modify(Model model,
			@ModelAttribute("member") Member member,
			@ModelAttribute("user") Member user) {
		member.setId(user.getId());
		//memberService.modify(member);
		model.addAttribute("user", mbrMapper.selectOne(member.getId()));
		
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
			@ModelAttribute Member member,
			@ModelAttribute("user") Member user) {
		member.setId(user.getId());
		//memberService.remove(member);
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