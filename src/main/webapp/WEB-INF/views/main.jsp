<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
 <!DOCTYPE html>
<html>
<head>
    <title>Main</title>
<%--      <link rel="shortcut icon" href="${context}/resources/img/favicon.ico" />  --%>
 <link href="${context}/resources/other_resources/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
	<link href="${context}/resources/other_resources/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" /> 
	
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script> -->
    <link rel="stylesheet" href="${context}/resources.style.css">


<!-- Favicons
    ================================================== -->

<!-- Bootstrap -->
<link rel="stylesheet" type="text/css"  href="${context}/resources/css/bootstrap.css">

<!-- Stylesheet
    ================================================== -->
<link rel="stylesheet" type="text/css"  href="${context}/resources/css/style.css">


<link rel="stylesheet" type="text/css" href="${context}/resources/css/nivo-lightbox/nivo-lightbox.css">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/nivo-lightbox/default.css">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
</head>
</body>
</html>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<!-- </head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top"> -->
<!-- Navigation
    ==========================================-->
<%--<nav id="menu" class="navbar navbar-default navbar-fixed-top">
  <div class="container"> 
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> </button>
      <a class="navbar-brand page-scroll" href="#page-top">이스리네</a> </div>
    
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a >About</a></li>
        <li id="loginBut" ><a class="page-scroll">Login</a></li>
      </ul>
    </div>
    <!-- /.navbar-collapse --> 
  </div>
</nav>
<!-- Header -->
<header id="header">
  <div class="intro">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="intro-text">
            <h1><strong>이스리네</strong> <span>/</span> Interior Design Studio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
            <a href="#about" class="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- About Section -->
<div id="about">
  <div class="container">
    <div class="section-title text-center center">
      <h2>Our Story</h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 text-center"> <img src="${context}/resources/img/about.jpg" class="img-responsive" alt=""> </div>
      <div class="col-xs-12 col-md-6">
        <div class="about-text">
          <h3>The Studio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
          <h3>How We Work</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Services Section -->
<div id="services">
  <div class="container">
    <div class="col-md-10 col-md-offset-1 section-title text-center">
      <h2>Our Services</h2>
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-4 service"> <img src="${context}/resources/img/residential-design.jpg" class="img-responsive" alt="Project Title">
        <h3>Residential Design</h3>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam. Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend.</p>
      </div>
      <div class="col-xs-12 col-sm-4 service"> <img src="${context}/resources/img/office-design.jpg" class="img-responsive" alt="Project Title">
        <h3>Office Design</h3>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam. Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend.</p>
      </div>
      <div class="col-xs-12 col-sm-4 service"> <img src="${context}/resources/img/commercial-design.jpg" class="img-responsive" alt="Project Title">
        <h3>Commercial Design</h3>
        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam. Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend.</p>
      </div>
    </div>
  </div>
</div>






 --%>
<!-- <script>
   //common.main('${context}');
      /* document.getElementById('login').addEventListener('click',function(){
    	alert('로그인 클릭');
    });  */  
    $("#loginBut").on('click', function() {
    	alert('로그인버튼2');
    	
    }); 
</script>
 -->
