/**
 * 
 */
"use strict;" 
var algo = algo || {};

algo = {
          init :  x => {
          alert('step1'+x);
          algo.onCreate(x);
          algo.setContentView();
          },
          onCreate : x => {
             
              algo.router.onCreate(x);
          },
          setContentView : () => {
        	  $('#wrapper').empty();
          }
};
algo.main = {
		onCreate : () =>{
			alert('step4::'+$.ctx());
			algo.main.setContentView();
		},
		setContentView : () =>{
			$('#wrapper').html('<h1>알고리즘~~~!!</h1><h3>수열</h3><div id="ctn">'
					+'<table id="tb1" style="width: 800px;height: 300px;border-collapse: collapse;border: 1px solid black;margin: 0 auto">'
					+'<tr style="border: 1px solid black;">'
					+'<td id="t__1" style="width: 50%;border: 1px solid black;"></td>'
					+'<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
					+'</tr>'
					+'</table>'
					+'</div>');
			 alert('step5'+$.ctx());
			  $('#t__1').html('<h1>Algorithm<\h1><div id= "content"><div>');
			  $('#t__1').append('<a id= "arith"><h3>등차수열</h3></a>');
			  //html은 오버라이딩 append는 오버로딩
			  $('#arith').click(e=>{
				 alert('등차수열선택'); 
			  });
			  $('#t__1').append('<a id ="fibonacci"><h3>피보나치</h3></a>');
			  $('#fibonacci').click(e=>{
				  alert('피보나치');
			  });
			  $('#t__1').append('<a id ="swit"><h3>스위치문</h3></a>');
			  $('#swit').click(e=>{
				  alert('스위치문');
			  });
			  $('#t__1').append('<a id ="factorial"><h3>팩토리얼</h3></a>');
			  $('#factorial').click(e=>{
				  alert('팩토리얼');
			  });
		}
};
algo.series = {
		arith : x =>{},	
		fibonacci : x=>{},
		swit : x ={},
		factorial :x =>{}
};
algo.array={
	bubble :x=>{},
	insert : x=>{},
	select : x=>{},
	renking : x=>{}
};
algo.matrix={
		fiveBy5: x=>{},
		sandGlass : x=>{},
		snail :x=>{},
		diamond : x=>{},
		xigzab : x=>{}
};
algo.math={
		
		
};
algo.appl={};
algo.router = {
		onCreate : x => {
		alert('step 2::'+x);
		$.getScript(x+'/resources/js/router.js', //java의 import의미
				()=> {
					alert('step 3::'+x);
					$.extend(new Session(x));
					algo.main.onCreate();
					alert('step 3.5::'+x);
					
				}
		);
	}
	};

