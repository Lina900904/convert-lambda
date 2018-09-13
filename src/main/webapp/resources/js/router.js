
"use strict;" // 에러가 나면 바로 보여줌
function Session(x){
	sessionStorage.setItem('ctx', x); // context에 x가 맵핑됨
	sessionStorage.setItem('script', x + '/resources/js');
	sessionStorage.setItem('style', x + '/resources/css');
	sessionStorage.setItem('img', x + '/resources/img');
return {ctx:()=>{ return sessionStorage.getItem('ctx');},
		script:()=>{ return sessionStorage.getItem('script');},
		style:()=>{ return sessionStorage.getItem('style');},
		img:()=>{ return sessionStorage.getItem('img');},
};
}