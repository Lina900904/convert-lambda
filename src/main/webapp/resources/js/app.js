/**
 * 
 */
"use strict;" // 에러가 나면 바로 보여줌

var app = app || {}; // 앱이 있으면 앱으로 대체해라


app = (()=>{
	var init =x => {
	console.log('step0');
	app.router.init(x);
}
return{init:init};
})();

app.main = (()=>{
	var w,index,header, footer, content, ctx, script, style, nav;
	var init =()=>{
		console.log('step1');
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		
		setContentView();
		
	};
	var setContentView =()=>{
		app.router.home();
	};
	return{init:init};
})();
app.board = (()=>{
	var w,index,header, footer, content, ctx, script, style, nav;
	var init=()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{
		setContentView()
	};
	var setContentView =()=>{
		$('#header').empty();
		$('#content').empty();
		$.getJSON(ctx+'/boards/1',d=>{
			  $.getScript($.script()+'/compo.js',()=>{
				  let x ={
					type : 'primary',
					id : 'table',
					head : '게시판',
					body : '오픈게시판~~',
					list :['No','제목','내용','작성자','작성일','조회수'],
				  	clazz:'table table-bordered'
				  };
				  (ui.tbl(x)).appendTo('#content');
				  $.each(d, (i,j)=>{
					  $('<tr/>').append(
							  $('<td/>').attr('width','5%').html(j.bno),
							  $('<td/>').attr('width','10%').html(j.title),
							  $('<td/>').attr('width','10%').html(j.content),
							  $('<td/>').attr('width','10%').html(j.writer),
							  $('<td/>').attr('width','10%').html(j.regdate),
							  $('<td/>').attr('width','10%').html(j.viewcnt)
							  ).appendTo($('tbody'));
				  });
				  
				
			  })
		})
	
	
	};

	return {init:init};
})();
app.permission =(()=>{
	var w,index,header, footer, content, ctx, script, style, nav,auth;
	var login =()=>{
		alert('login');
		$('#header').remove();
		$('#content').empty();
		$('#footer').remove();
		  $.getScript($.script()+'/compo.js',()=>{
			  $.getScript($.script()+'/login.js',()=>{ //setter의 의미
				  $('#content').html(loginUI())
				  ui.anchor({id : 'loginFormBtn', txt:'로그인'})
				  .css({'width':'300px'})
				  .addClass("btn btn-primary")
				  .appendTo('#login')
				  .click(x=>{
					  alert('버튼을 눌렀다~~'+$('#id').val());
					  $.ajax({
						  url : $.ctx()+'/member/login',
						  method : 'post',
						  contentType : 'application/json',
						  data : JSON.stringify({
							  id : $('#id').val(),
							  password : $('#password').val()
						  }),
						  success : d=>{
							  alert('ID판단'+d.ID);
							  alert('pw판단'+d.PASSWORD);
							  alert('mbr판단'+d.mbr);
							  
							  if(d.ID==="WRONG"||d.PASSWORD==="WRONG"){
								  app.router.home();
								
								}else{
									app.router.loginNav();
								};
						  },
						  error : (m1,m2,m3)=>{
							  alert(m3);
						  }
					  });
				  })
			  });
		  });
		 
	};
	var add =()=>{
		alert('조인하이');
		$('#header').remove();
		$('#content').empty();
		$('#footer').remove();
		 $.getScript($.script()+'/compo.js',()=>{
			 $.getScript($.script()+'/add.js',()=>{
				  $('#content').html(addUI())
				  var arr = [];
				  var sub = $("[name='subject']");
				  let i;
				  for(i of sub){
					  if(i.checked){
						  alert('선택과목'+i.value);
						  arr.push(i.value);
					  }
				  }
				  ui.anchor({id : 'joinFormBtn', txt:'회원가입'})
				  .addClass('btn btn-primary')
				  .appendTo("#join-Form")
				.click(x=>{
					  alert('버튼을 눌렀다~~');
					  $.ajax({
						  url : $.ctx()+'/member/add',
						  method : 'post',
						  contentType : 'application/json',
						  data : JSON.stringify({
							  id : $('#id').val(),
							  name : $('#name').val(),
							  ssn : $('#ssn').val(),
							  password : $('#password').val(),
							  roll : $('#roll').val(),
							  teamId : $('[name=teamId]:checked').val(),
							  subject:JSON.stringify(arr) //키와 각 멤버의 값을 전달하여 함수를 호출
						  }),
						  success : d=>{
							  alert('ID판단'+d.id);
							  alert('pw판단'+d.pw);
							  alert('mbr판단'+d.mbr);
						  },
						  error : (m1,m2,m3)=>{
			 					alert('에러발생1'+m1);
			 					alert('에러발생2'+m2);
			 					alert('에러발생3'+m3);
						  }
					  });
				  })
		 });
		
		}
	)};

	return {login:login,add:add};
})();
app.router = {
		
		init : x => {		
		$.getScript(x+'/resources/js/router.js', //java의 import의미
				()=> {				
					$.extend(new Session(x));
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{
					console.log('실행')
					app.main.init();
					})
					
				})
				.fail(s=>{console.log('실패')})
	},
		home : ()=>{
			 $.when(
				      $.getScript($.script()+'/header.js'),
				      $.getScript($.script()+'/content.js'),
				      $.getScript($.script()+'/nav.js'),
				      $.getScript($.script()+'/footer.js'),
				      $.Deferred(y=>{
				    		$(y.resolve);
				    		console.log('step3');
				      })
			).done(z=>{
				console.log('step4');
				$('#wrapper').html(
						navUI()
						+headerUI()
						+contentUI()
						+footerUI()
						);
				$('#loginBut').click(e=>{
					e.preventDefault(); // 기본으로 정의된 이벤트를 작동하지 못하게함
					app.permission.login();
				});
				$('#boardBut').click(e=>{
					e.preventDefault();
					alert('게시판');
					app.board.init();
				});
				$('#joinBut').click(e=>{
					alert('회원가입~');
					//e.preventDefault();
					app.permission.add();
					
					
				});
		
		   }).fail(x=>{
		   	console.log('로드실패');
		   });
			},
		loginNav : ()=>{
			 $.when(
			   $.getScript($.script()+'/header.js'),
			      $.getScript($.script()+'/content.js'),
			      $.getScript($.script()+'/auth.js'),
			      $.getScript($.script()+'/footer.js'),
			      $.Deferred(y=>{
			    		$(y.resolve);
			    		console.log('step3');
			      })
		).done(z=>{
			console.log('step4');
			$('#wrapper').html(
					authUI()
					+headerUI()
					+contentUI()
					+footerUI()
					);
			$('#logoutBut').click(e=>{
				alert('로그아웃~');
				//e.preventDefault();
				app.router.home();
				
				
			});
		})
		}
		
}
