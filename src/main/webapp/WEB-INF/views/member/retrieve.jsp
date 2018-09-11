<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div id ="content-box">
	<form id="mypage">	
	
	<h1> retrieve PAGE </h1>
	
		<table id="mypage-table">
			<tr>
				<td id="mypage-img" rowspan="7" colspan="2" >
				<img src="${img}/${profile}"/>
				<td>아이디</td>
				<td>${user.id}</td>
				
			</tr>
			<tr>
				
				<td>이름</td>
				<td>${user.name}</td>
			</tr>
			
			<tr>
				
				<td>비밀번호</td>
				<td>${user.password}</td>
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
				<td>${user.roll}</td>
				
			</tr>
			
			<tr>
				<td>팀아이디</td>
				<td>${user.teamId}</td>
			</tr>

		</table>

	 <a id="updateBtn">	<input type="button"  value="정보수정" /></a>
 	<a id="logoutBtn">	<input type="button"  value="로그아웃" /></a>
		<a id="deleteBtn">	<input type="button"  value="회원탈퇴" /></a>

	</form>
	</div>

 <script>
 $('#updateBtn').click(function () {

		location.href = '${context}/move/auth/member/modify';
	});
	$('#logoutBtn').click(function () {
		location.href = '${context}';
	});
	$('#deleteBtn').click(function () {
		location.href = '${context}/move/auth/member/remove';
	});
	$('#board_write').click(function () {
	//	location.href = '${context}/move/auth/member/remove';
	});
	$('#board_list').click(function () {
		//	location.href = '${context}/move/auth/member/remove';
		});
	
</script>