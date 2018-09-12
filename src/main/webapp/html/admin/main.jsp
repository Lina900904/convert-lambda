<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="context" value="<%=application.getContextPath()%>" />
 --%>
<!doctype html>
<html lang="en">
<title>ADMIN</title>
<jsp:include page="../common/header.jsp" />
<body>
	<div id="wrapper">
		<div id="header">
		<h1>관리자 페이지</h1>
			<jsp:include page="../common/loginbox.jsp" />
			</div> <!-- header end -->
			<jsp:include page="../member/search.jsp" />
		</div>
	<div id="footer"></div>


<script>
admin.main('${context}')

</script>
</body>
</html>