


"use strict;" //프로토타입 패턴
$.prototype.zeroChecker =x=>{
	let flag =false;
	let i =0;
	for(i in x){									
		if(x[i] ===0){ 					
			flag= true;					
		}
	}
	return flag;
};