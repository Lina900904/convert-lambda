<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!doctype html>
<html lang="en">
<title>MEMBER MAIN</title>
<jsp:include page="../common/header.jsp" />
<body>
	<div id="wrapper">
		<div id="header">
			<%-- <jsp:include page="../common/title.jsp" /> --%>
			<jsp:include page="../common/menubox.jsp" />
			<jsp:include page="../common/loginbox.jsp" />
		</div>
		<div id="content-box">
			<h1></h1>
			<c:choose>
				<c:when test="${pagename eq 'add'}">
					<jsp:include page="add.jsp"/>
				</c:when>
				<c:when test="${pagename eq 'login'}">
					<jsp:include page="login.jsp"/>
				</c:when>
				<c:when test="${pagename eq 'search'}">
					<jsp:include page="search.jsp"/>
				</c:when>
				<c:when test="${pagename eq 'modify'}">
					<jsp:include page="modify.jsp"/>
				</c:when>
				<c:otherwise>
					<jsp:include page="retrieve.jsp"/>
				</c:otherwise>
			</c:choose>



		</div>
		<!-- header end -->

	</div>
	<div id="footer"></div>

	<script>
		member.main('${context}');
	</script>

</body>
</html>