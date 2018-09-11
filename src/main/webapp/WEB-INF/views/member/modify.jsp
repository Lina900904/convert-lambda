<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div id="content-box">
	<form id="update-Form" name="update-Form">

		<h1>modify PAGE</h1>
		<table id="mypage-table">
			<tr>
				<td id="mypage-img" rowspan="7" colspan="2"><img
					src="resources/img/home/turtle.PNG" />
				<td>아이디</td>
				<td>${user.name}</td>
			</tr>
			<tr>
				<td>새비밀번호</td>
				<td><input type="text" name="password" placeholder="password" /></td>
			</tr>
			<tr>
				<td>나이</td>
				<td>${user.age}</td>
			</tr>

			<tr>
				<td>성별</td>
				<td>${user.gender}</td>
			</tr>

			<tr>
				<td>역할</td>
				<td><select name="roll" id="roll">
						<option value="leader" selected="selected">팀장</option>
						<option value="front" selected="selected">프론트개발</option>
						<option value="back" selected="selected">백단개발</option>
						<option value="android" selected="selected">안드로이드 개발</option>
						<option value="minfe" selected="selected">민폐</option>
				</select></td>
			</tr>

			<tr>
				<td>팀아이디</td>
				<td><input type="radio" name="teamId" value="none"
				checked="checked" />없음 
				<input type="radio" name="teamId" value="nolja" checked="checked" />걍놀자
				<input type="radio"name="teamId" value="jieunHouse" checked="checked" />지은이네 
				<input type="radio" name="teamId" value="turtleKing" checked="checked" />왕거북이
				<input type="radio" name="teamId" value="coddingZzang"checked="checked" />코딩짱
				</td>
			</tr>


		</table>

		<input id="updateFormBtn" type="button" value="전송" /><br />
	

	</form>

	<form method="POST" enctype="multipart/form-data" 
			action="${context}/member.do?action=fileupLoad&page=retrieve">
		파일 업로드: <input type="file" name="upfile"><br />
		<input type="submit" value="파일업로드"> 
	</form>
	

</div>
<script>
$('#updateFormBtn').click(function() {
	alert("updateFormBtn click")
	$('#update-Form').attr({
		action : "${context}/member/modify",
		method: "POST",
			
	})
	.submit();
});
</script>