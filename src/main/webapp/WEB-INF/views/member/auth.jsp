<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- Navigation
    ==========================================-->

<div class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
			</button>
			<a class="navbar-brand page-scroll" href="#page-top">이스리네</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">

				<li id="mypageBut"><a class="page-scroll"> 
				${user.name} 로그인 중 </a></li>
				<li><input type="hidden" id="session"  /></li>
					<li id="mypage"><a class="page-scroll"> 
				mypage </a></li>
				<li id="loginBut"><a class="page-scroll">Logout</a></li>
				<li><a id="board_write">게시글쓰기</a></li>
				<li><a id="board_list">게시글목록</a></li>
			</ul>
		</div>
		<!-- /.navbar-collapse -->
	</div>
</div>
<script>

	
	$('#mypage').click(function () {
		alert("마이페이지버튼");
	
		location.href = '${context}/move/auth/member/retrieve';
	
	});
	</script>


