package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.cmm.Util;


@RestController
@RequestMapping("/member") //root-context공간에 저장

public class MemberCtrl {	
	static final Logger Logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired MemberMapper mbrMapper;
	@Autowired Member member;
	//@Autowired MemberService memberService;
	@PostMapping(value="/add")
	public @ResponseBody String  add(@RequestBody Member member) {
		System.out.println("member is "+ member);
		String add = "";
		
		return add;
	}
	
	@PostMapping(value="/login")
	public @ResponseBody Map<String,Object> login( 
			 @RequestBody Member pm) {
		Map<String,Object> rm = new HashMap<>();
		Logger.info("\n=================== memberController");
		Util.log.accept("로그인왔다");
		// Predicate<String> p = s->!s.equals(""); 
		System.out.println(pm.getId());
		System.out.println("count값"+mbrMapper.count(pm));
	
		String pwValid = "WRONG";
		String idValid ="WRONG";
		if(mbrMapper.count(pm)!=0) {
			
			 idValid ="CORRECT";
			Util.log.accept("ID 유효성검사"+idValid);
			Function<Member,Member> f = (t)->{ //t=member 
				return mbrMapper.get(t);
			};
			member = f.apply(pm);
			pwValid = (member !=null)?"CORRECT":"WRONG"; 
			
			member = ( member != null)? member:new Member();
				
		}
	
			//Util.log.accept(member.toString());
			System.out.println(member);
			rm.put("ID EXIST", idValid);
			rm.put("PASSWORD", pwValid);
			rm.put("MBR", pm);
		return rm;
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
	//	model.addAttribute("user", mbrMapper.selectOne(member.getId()));
		
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