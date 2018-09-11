<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!doctype html>
<html lang="en">
<head>
    <title>Main</title>
<%--      <link rel="shortcut icon" href="${context}/resources/img/favicon.ico" />  --%>

<link rel="stylesheet" type="text/css"  href="${context}/resources/css/bootstrap.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<link rel="stylesheet" href="${context}/resources/css/style.css">

<link href="${context}/resources/other_resources/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
<link href="${context}/resources/other_resources/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
  
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

  
<link rel="stylesheet" type="text/css" href="${context}/resources/css/nivo-lightbox/nivo-lightbox.css">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/nivo-lightbox/default.css">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
   
   
	<%-- <script src = "${context}/resources/js/app.js"></script> --%>
</head>

<body>
	<div id="wrapper">
		<div id="nav">
			<tiles:insertAttribute name="nav"/>
		</div>
		<div id="header">
			<tiles:insertAttribute name="header"/>
		</div>
		<div id="content">       
			<tiles:insertAttribute name="content"/>
		</div>
		<div id="footer">
			<tiles:insertAttribute name="footer"/>
		</div>
	</div>

	<!-- 	<script>
    app.init('${context}');
</script> -->
</body>
</html>

