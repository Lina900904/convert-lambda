/**
 * 
 */
"use strict;" // 에러가 나면 바로 보여줌

var app = app || {}; // 앱이 있으면 앱으로 대체해라
var user = user ||{};
app = {
	init : x => {
		console.log('step1');
		app.session.context(x);
		app.onCreate();
	},
	onCreate : () => {
		console.log('step3');
		app.setContentView(); //뷰를 만든다음
/*		$('#loginBut').click(() => {
			location.href = app.x() + '/move/auth/member/login';
		}),
		$('#joinBut').click(() => {
			location.href = app.x() + '/move/auth/member/add';
		}),
*/
/*		$('#joinFormBtn').click(() => {
			alert('joinFormBtn click');
			var form = document.getElementById('join-Form');
			form.action = app.x() + "/member/add"
			form.method = "POST"
			$('#join-Form')
			.attr({
				action : app.x()+"/member/add",
				method : "POST"
				
			})
			.submit();
		});*/
/*		$('#loginFormBtn').click(() => {
			alert("loginFormBtn click")
			$('#login').attr({
				action : app.x()+"/member/login",
				method: "POST",
				
			
			})
			.submit();
		});*/
	/*	$('#updateBtn').click(() => {
			location.href = app.x()+'/move/auth/member/modify';
		});*/
	/*	$('#updateFormBtn').click(() => {
			alert("updateFormBtn click")
			$('#update-Form').attr({
				action : app.x()+"/member/modify",
				method: "POST",
					
			})
			.submit();
		});*/
	/*	$('#logoutBtn').click(() => {
			location.href = app.x() ;
		});
		$('#deleteBtn').click(() => {
			location.href = app.x() + '/move/auth/member/remove';
		});*/
/*		$('#deleteFormBtn').click(() => {
			alert("deleteFormBtn click")
			$('#deleteForm').attr({
			
				action : app.x()+"/member/remove",
				method: "POST",
					
			})
			.submit();
		});*/
		$('#mypageBut').click(() => {
			
			location.href = app.x() + '/member/retrieve'+user.get('id');
		});

	},
	setContentView : () => {
		console.log('step4' + app.session.path('js')); //step4/web/resources/js

	}
};

app.x = () => {
	return app.session.path('context');
};
app.j = () => {
	return app.session.path('js');
};
app.c = () => {
	return app.session.path('css');
};
app.i = () => {
	return app.session.path('img');
};

app.session = {
	context : x => {
		console.log('step2' + x);
		sessionStorage.setItem('context', x) // context에 x가 맵핑됨
		sessionStorage.setItem('js', x + '/resources/js')
		sessionStorage.setItem('css', x + '/resources/css')
		sessionStorage.setItem('img', x + '/resources/img')
	},
	path : x => {
		return sessionStorage.getItem(x);

	}
};

user.session= x=>{
	$.each(x, function(k,v){
		alert('key:'+k,'value:'+v);
		sessionStorage.setItem(k,v);
	});
	alert(sessionStorage.getItem('id'));
};

