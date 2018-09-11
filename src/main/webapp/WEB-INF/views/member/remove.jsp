<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<div id="content-box">

	<h1>회원 삭제</h1>

	<form id="deleteForm">
		<!-- 아이디: <input type="text" name = "id" /> -->
		비밀번호재입력:<input type="text" name="password" id="password" />
		<!-- <input type="hidden" name = "action" value = "delete"/>
<input type="hidden" name = "page" value = "delete" /> -->
		<input id="deleteFormBtn" type="button" value="전송" />
	</form>
</div>

<script>
	$('#deleteFormBtn').click(function() {
		alert("deleteFormBtn click");
		
		if($('#password').val() === ''){
			alert('비밀번호를 입력하세요');
		}else if($('#password').val() !== '${user.password}'){
			alert('비밀번호가 틀렸습니다');
		}else{
			$('#deleteForm').attr({
			action : "${context}/member/remove",
			method: "POST"
			})
			.submit();
		
		}
		
});
</script>

