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
		app.setContentView(); 
		
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


