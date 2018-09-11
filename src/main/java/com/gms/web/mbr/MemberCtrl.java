package com.gms.web.mbr;


import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.mbr.MemberMapper;
import com.google.common.base.Function;




@Controller
@RequestMapping("/member") //root-context공간에 저장
@SessionAttributes("user") //user란 세션공간
public class MemberCtrl {
	//static final Logger Logger = LoggerFactory.getLogger();
	@Autowired MemberMapper mbrMapper;
	@Autowired Member member;
	@Autowired MemberService memberService;
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public String add(@ModelAttribute Member member) {
		memberService.add(member);
		System.out.println("member is "+ member);
		return "redirect:/move/auth/member/login";
	}
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public String login(Model model, 
			@ModelAttribute("member") Member param) {
		//Logger.info("\n=================== memberController");
		Predicate<String> p = s->!s.equals("");
		System.out.println(">>>>>>>>>>>>>"+param.getId());
		String r = mbrMapper.exist(param.getId());
		System.out.println("++++++++++++++"+r);
		boolean b =p.test(r);
		System.out.println(">>>>>>>>>>>>>b값"+b);
		
		
		System.out.println("param id>>>>"+param.getId());
		System.out.println("param pw>>>>"+param.getPassword());
		String login = "login_failed";
		if(p.test(mbrMapper.exist(param.getId()))) {
			Function<Member, String> f = (t)->{
				return mbrMapper.login(t);
			};
			login =  (f.apply(param).equals("1"))?
					"login__success":
						"login__failed";
			System.out.println("로그인성공");
			//model.addAttribute("user", memberService.retrieve(member));
		}
		
		return login;
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
			@ModelAttribute Member member,
			@ModelAttribute("user") Member user) {
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