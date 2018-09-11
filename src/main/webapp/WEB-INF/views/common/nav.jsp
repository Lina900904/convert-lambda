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
			

				<li id="loginBut"><a class="page-scroll">Login</a></li>
				<li id="joinBut"><a class="page-scroll">회원가입</a></li>
			</ul>
		</div>
		<!-- /.navbar-collapse -->
	</div>
</div>
<script>
$('#loginBut').click(function () {
	location.href = '${context}/move/auth/member/login';
});

$('#joinBut').click(function () {
		location.href ='${context}/move/auth/member/add';
});


</script>