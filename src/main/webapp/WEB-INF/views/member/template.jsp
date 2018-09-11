<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%-- <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="context" value="<%=application.getContextPath()%>" />
 --%>


<div id ="content-box"> 
		<div id = "header">
<%-- 	<jsp:include page ="../common/titlebox.jsp"/> --%>
	<jsp:include page ="../common/loginbox.jsp"/>			
		</div> <!-- header end -->
	<jsp:include page ="../common/menubox.jsp"/>
	<%-- <jsp:include page ="../common/contentbox.jsp"/> --%>

		
	</div>
	
	<div id = "footer"></div>
	<%-- <jsp:include page ="../common/footerbox.jsp"/> --%>
	<script>
	var form = document.getElementById('deleteForm');
	var pass = form.pass.value;
	if(pass==''){
		
		alert('비밀번호가 입력필요.');
	}else{
		alert('비밀번호가 다릅니다.');
		
	}
	
	</script>








