/**
 * 
 */
"use strict;" 
var algo = algo || {};

algo = {
          init :  x => {
        
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
algo.main =(()=>{
	var $wrapper,ctx,img,script,style,compo,json,$t__1;
	var onCreate = () =>{
		ctx = $.ctx();
		img = $.img();
		script =$.script();
		style =$.style();
		compo =script+'/compo.js';
		setContentView();
	};
	var setContentView = () =>{
		$('#wrapper').html('<h1>알고리즘~~~!!</h1><span id="seq"><h3>수열</h3>'
				+'<span id="appl"><h3>응 용</h3><div id="ctn">'
				+'<table id="tb1" style="width: 800px;height: 300px;border-collapse: collapse;border: 1px solid black;margin: 0 auto">'
				+'<tr style="border: 1px solid black;">'
				+'<td id="t__1" style="width: 50%;border: 1px solid black;"></td>'
				+'<td id="t__r" style="width: 50%;border: 1px solid black;"></td>'
				+'</tr>'
				+'</table>'
				+'</div>');
		let $t__1 = $('#t__1'); 
		let $t__r = $('#t__r'); //dom객체
	
		$('<ul/>')
		.attr({id : 'side__menu'})
		.addClass('list-group').appendTo($t__1);
		$('<li/>')
		.attr({id : 'arith'})
		.addClass('list-group-item')
		.appendTo($('#side__menu'));

		$('<a/>')
		.attr({href : '#'})
		.html('등차수열의 합')
		.appendTo($('#arith'))
		       .click(e=>{
		    	   $('#ques').remove();
			/*	let ques = 
					'<div id="ques"><h3>시작 값x, 마지막값y, 공차 d 등차 수열의 합을 구하시오</h3>'
					+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
					+'<label for="마지막값"></label> 마지막값<input id= "end"  type="text" value=""><br>'
					+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'
					+'<button id= "bt">결과보기</button>'
					+'<h6 id ="rs" ></h6></div>';*/
				$('<div/>').attr({id: 'ques'}).appendTo($t__r);
				$('<h4>').html('시작 값x, 마지막값y, 공차 d의 합을 구하시오').appendTo($('#ques'));
				
				let arr=[{id:'sta', label:'시작값'},{id:'end', label:'마지막값'},{id:'diff', label:'공차'}];
				
				$.each(arr, function(){
					/*$.fn.label('시작값','ques'); = > 컨포넌트~*/
					$('<br><label/>').html(this.label).appendTo($('#ques'));
					$('<input/>').attr({id: this.id ,type:'text'}).appendTo($('#ques'));
				});
		
				$('<br><button/>')
				.addClass('btn btn-primary')
				.attr({type:'button'})
				.html('결과보기')
				.appendTo($('#ques')) 
				.click(e=>{
					 arr=[
						 $('#sta').val()*1,
						 $('#end').val()*1,
						 $('#diff').val()*1
						 ];
					 
					 if( $.fn.zeroChecker(arr)){
						 alert('입력하세요');
						 
					 }else{
						 let ans = "답 :";
						 let sta = $('#sta').val()*1;
						 let end =$('#end').val()*1;
						 let d =$('#diff').val()*1;
						 let i = sta;
						 let sum =0;
						 while(i<=end){
							 sum +=i;
							 i++;
						 }
						 $('#h6').text(sum)
					    
					 }
					  $('<h3/>').attr({id: 'h6',type:'text'}).appendTo($('#ques'));
				 });
			 });
		$('<br><a/>')
		.attr({href : '#'})
		.html('피보나치 합')
		.appendTo($('#arith'))
		       .click(e=>{
		    	   $('#ques').remove();
			/*	let ques = 
					'<div id="ques"><h3>시작 값x, 마지막값y, 공차 d 등차 수열의 합을 구하시오</h3>'
					+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
					+'<label for="마지막값"></label> 마지막값<input id= "end"  type="text" value=""><br>'
					+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'
					+'<button id= "bt">결과보기</button>'
					+'<h6 id ="rs" ></h6></div>';*/
				$('<div/>').attr({id: 'ques'}).appendTo($t__r);
				$('<h4>').html('시작 값x, 마지막값y, 공차 d의 피보나치합을 구하시오').appendTo($('#ques'));
				
				let arr=[{id:'sta', label:'시작값'},{id:'end', label:'마지막값'},{id:'diff', label:'공차'}];
				
				$.each(arr, function(){
					/*$.fn.label('시작값','ques'); = > 컨포넌트~*/
					$('<br><label/>').html(this.label).appendTo($('#ques'));
					$('<input/>').attr({id: this.id ,type:'text'}).appendTo($('#ques'));
				});
		
				$('<br><button/>')
				.addClass('btn btn-primary')
				.attr({type:'button'})
				.html('결과보기')
				.appendTo($('#ques')) 
				.click(e=>{
					 arr=[
						 $('#sta').val()*1,
						 $('#end').val()*1,
						 $('#diff').val()*1
						 ];
					 
					 if( $.fn.zeroChecker(arr)){
						 alert('입력하세요');
						 
					 }else{
						 let ans = "답 :";
						 let sta = $('#sta').val()*1;
						 let end =$('#end').val()*1;
						 let d =$('#diff').val()*1;
						 let i = sta;
						 let sum =0;
						 while(i<=end){
							 sum +=i;
							 i++;
						 }
						 $('#h6').text(sum)
					    
					 }
					  $('<h3/>').attr({id: 'h6',type:'text'}).appendTo($('#ques'));
				 });
				 });
		
		  $('#appl').click(x=>{//화폐문제
			  $t__1.empty();
			  $.getScript(compo, ()=>{
				 ui.ul({len : 3,id :'menu'}).appendTo($t__1);
				 ui.anchor({txt:'화폐문제'})
				 .appendTo($('#menu-0'))
				 .click(x=>{
					 alert('화폐문제!');
					 let quest='화폐문제';
					 $('<h6>화폐문제</h6>').appendTo($t__r);
					 ui.input({
							id : 'money',
							txt : '입금액'})
							.appendTo($t__r);
					 		ui.btn({clazz : 'primary', txt :'전 송'})
					 		.appendTo($t__r)
					 		.click(x=>{
					 			alert('화폐금액'+$('#money').val());
					 			$.ajax({
					 				url : ctx+'/algo/money/',
					 				method : 'post',
					 				contentType : 'application/json',
					 				data : JSON.stringify({money : $('#money').val()}), //실어서 보낼것 중요stringify
					 				success : d=>{
					 					alert('ajax 성공이다'+d.test); //자바에서는 map을 받으니까
					 					
					 				},
					 				error : (m1,m2,m3)=>{
					 					alert('에러발생1'+m1);
					 					alert('에러발생2'+m2);
					 					alert('에러발생3'+m3);
					 				}
					 			});
					 		});
				 });
				
			  });
				
		  });
	
	};
	return{
		onCreate:onCreate,
		setContentView:setContentView
			
	};
})();
/*

algo.main = {
		onCreate : () =>{
			
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
			let $t__1 = $('#t__1'); 
			let $t__r = $('#t__r'); //dom객체
			$('<ul/>')
			.attr({id : 'side__menu'})
			.addClass('list-group').appendTo($t__1);
			$('<li/>')
			.attr({id : 'arith'})
			.addClass('list-group-item')
			.appendTo($('#side__menu'));

		
				let anchor = $.fn.anchor({txt:'등차수열의 합'});
			       anchor.appendTo($('#arith'))
			       .click(e=>{
					$t__r.empty();
					let ques = 
						'<div id="ques"><h3>시작 값x, 마지막값y, 공차 d 등차 수열의 합을 구하시오</h3>'
						+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
						+'<label for="마지막값"></label> 마지막값<input id= "end"  type="text" value=""><br>'
						+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'
						+'<button id= "bt">결과보기</button>'
						+'<h6 id ="rs" ></h6></div>';
					$('<div/>').attr({id: 'ques'}).appendTo($t__r);
					$('<h4>').html('시작 값x, 마지막값y, 공차 d의 합을 구하시오').appendTo($('#ques'));
					
					let arr=[{id:'sta', label:'시작값'},{id:'end', label:'마지막값'},{id:'diff', label:'공차'}];
					
					$.each(arr, function(){
						$.fn.label('시작값','ques'); = > 컨포넌트~
						$('<br><label/>').html(this.label).appendTo($('#ques'));
						$('<input/>').attr({id: this.id ,type:'text'}).appendTo($('#ques'));
					});
				
					
					
					for(let i in arr){
							$('<br><label/>').html(arr[i].label).appendTo($('#ques'));
							$('<input/>').attr({id: arr[i].id ,type:'text'}).appendTo($('#ques'));
						
					};
					$(arr).each(function(){
						$('<br><label/>').html(this.label).appendTo($('#ques'));
						$('<input/>').attr({id: this.id ,type:'text'}).appendTo($('#ques'));
					});
					
					$.each(arr, function(i, j){
						$('<br><label/>').html(j.label).appendTo($('#ques'));
						$('<input/>').attr({id: j.id ,type:'text'}).appendTo($('#ques'));
					});
					
					$('<br><button/>')
					.addClass('btn btn-primary')
					.attr({type:'button'})
					.html('결과보기')
					.appendTo($('#ques')) 
					.click(e=>{
						 arr=[
							 $('#sta').val()*1,
							 $('#end').val()*1,
							 $('#diff').val()*1
							 ];
						 
						 if( $.fn.zeroChecker(arr)){
							 alert('입력하세요');
							 
						 }else{
							 let ans = "답 :";
							 let sta = $('#sta').val()*1;
							 let end =$('#end').val()*1;
							 let d =$('#diff').val()*1;
							 let i = sta;
							 let sum =0;
							 while(i<=end){
								 sum +=i;
								 i++;
							 }
							 $('#h6').text(sum)
						    
						 }
					 });
					  $('<h3/>').attr({id: 'h6',type:'text'}).appendTo($('#ques'));
					 });
			
			
		}
}
			
			*/
			
			 /* $('#t__1').html('<h1>Algorithm<\h1><div id= "content"><div>');
			  $('#t__1').append('<a id= "arith"><h3>등차수열</h3></a>');
			  //html은 오버라이딩 append는 오버로딩
			  $('#arith').click(e=>{
				 alert('등차수열선택'); 
				  $('#t__r').empty();
				 let ques = 
						'<h3>시작 값x, 마지막값y, 공차 d 등차 수열의 합을 구하시오</h3>'
						+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
						+'<label for="마지막값"></label> 마지막값<input id= "end"  type="text" value=""><br>'
						+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'
						+'<button id= "bt">결과보기</button>'
						+'<h6 id ="rs" ></h6>';
				 				
				 ///console.log(sta+','+end+','+','+d)
				 $('#t__r').append(ques);
				 $('#bt').click(()=>{
					 arr=[
						 $('#sta').val()*1,
						 $('#end').val()*1,
						 $('#d').val()*1
						 ];
					 if( $.fn.zeroChecker(arr)){
						 alert('입력하세요');
						 
					 }else{
						 let ans = "답 :";
						 let sta = $('#sta').val()*1;
						 let end =$('#end').val()*1;
						 let d =$('#d').val()*1;
						 let i = sta;
						 let sum =0;
						 while(i<=end){
							 sum +=i;
							 i++;
						 }
						 $('#rs').empty().text(sum);
					 }
				 });
				 });	
			  
			  $('#t__1').append('<a id ="fibonacci"><h3>피보나치</h3></a>');
			  $('#fibonacci').click(e=>{
				  alert('피보나치');
				  $('#t__r').empty();
				 // let ques = '1+1+2+3+5+6+8+13+21+34... 의 답을 구하시오';
				  let ques = 
						'<h3>시작 값x, 마지막값y, 공차 d 피보나치 수열의 합을 구하시오</h3>'
						+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
						+'<label for="마지막값"></label> 마지막값<input id= "end"  type="text" value=""><br>'
						+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'					
						+'<button id= "bt">결과보기</button>'
						+'<h6 id ="rs"></h6>';
						
				 				
				 ///console.log(sta+','+end+','+','+d)
				  $('#t__r').append(ques);
					 $('#bt').click(()=>{
						 arr=[
							 $('#sta').val()*1,
							 $('#end').val()*1,
							 $('#d').val()*1
							 ];
						 if( $.fn.zeroChecker(arr)){
							 alert('입력하세요');
							 
						 }else{
							 let ans = "답 :";
							 let sta = $('#sta').val()*1;
							 let end =$('#end').val()*1;
							 let d =$('#d').val()*1;
							 let i = sta;
							 let sum =0;
							 while(i<=end){
								 sum +=i;
								 i++;
							 }
							 $('#rs').empty().text(sum);
						 }
					 });
					 });	
		
				
			
			  $('#t__1').append('<a id ="swit"><h3>스위치문</h3></a>');
			  $('#swit').click(e=>{
				  $('#t__r').empty();
				  alert('스위치문');
				//  let ques = '1-2+3-4+5-6...100 의 답을 구하시오';
				  let ques = 
						'<h3>시작 값x, 마지막값y, 공차 d 스위치 수열의 합을 구하시오</h3>'
						+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
						+'<label for="마지막값"></label> 마지막값<input id= "end"  type="text" value=""><br>'
						+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'
						+'<button id= "bt">결과보기</button>';
				 				
				 ///console.log(sta+','+end+','+','+d)
				  $('#t__r').append(ques);
					 $('#bt').click(()=>{
						 arr=[
							 $('#sta').val()*1,
							 $('#end').val()*1,
							 $('#d').val()*1
							 ];
						 if( $.fn.zeroChecker(arr)){
							 alert('입력하세요');
							 
						 }else{
							 let ans = "답 :";
							 let sta = $('#sta').val()*1;
							 let end =$('#end').val()*1;
							 let d =$('#d').val()*1;
							 let i = sta;
							 let sum =0;
							 while(d<=end){
								 if(d%2==1){
									 sum +=d
								 }else{
									 sum -=d
								 }
								 d++;
							 }
							 $('#rs').empty().text(sum);
						 }
					 });
					 });	
				  
				  
				  
			
			  $('#t__1').append('<a id ="factorial"><h3>팩토리얼</h3></a>');
			  $('#factorial').click(e=>{
				  $('#t__r').empty();
				  alert('팩토리얼');
				  //let ques = '팩토리얼의 답을 구하시오( 5 * 4 * 3 * 2 * 1 )';
				  let ques = 
						'<h3>시작 값x, 마지막값y, 공차 d 팩토리얼 수열의 합을 구하시오</h3>'
						+'<label for="시작값"></label> 시작값<input id= "sta" type="text" value=""><br>'
						
						+'<label for="공차"></label>공차 <input id= "d"  type="text" value=""><br>'
						+'<button id= "bt">결과보기</button>';
				 				
				 ///console.log(sta+','+end+','+','+d)
				  $('#t__r').append(ques);
					 $('#bt').click(()=>{
						 arr=[
							 $('#sta').val()*1,
							 $('#end').val()*1,
							 $('#d').val()*1
							 ];
						 if( $.fn.zeroChecker(arr)){
							 alert('입력하세요');
							 
						 }else{
							 let ans = "답 :";
							 let sta = $('#sta').val()*1;
							 let end =$('#end').val()*1;
							 let d =$('#d').val()*1;
							 let i = sta;
							 let sum =0;
							 while(i<=1){		
								 i = sta-d;
								 sum *=(sta*i);
								 i++;
								 
							 }
							 $('#rs').empty().text(sum);
						 }
					 });
					 });	*/
				  
				  
				

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
		$.getScript(x+'/resources/js/router.js', //java의 import의미
				()=> {				
					$.extend(new Session(x));
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(s=>{console.log('실행')})
					.fail(s=>{console.log('실패')})
					algo.main.onCreate();
					
					
				}
		);
	}
	};
algo.util={
		onCreate : x => {		
			$.getScript(x+'/resources/js/router.js',
					()=> {	
						//코딩
						algo.main.onCreate();
						}
					
			);
}
}

