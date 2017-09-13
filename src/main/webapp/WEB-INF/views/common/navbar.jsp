<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">LEEJIWON</a>
    </div>
    <ul class="nav navbar-nav">
      <li id="go_main"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>
      <li class="dropdown">
      	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
      	 <span class="center">회원관리</span></a>
      	 <ul id="nab_ul_stu">
      	 	<li><a>학생 추가</a></li>
      	 	<li><a>학생 목록</a></li>
      	 	<li><a>학생 조회</a></li>
      	 	<li><a></a></li>
      	 	<li><a>학생 삭제</a></li>
      	 </ul>	
      </li>
      <li class="dropdown">
      	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
      	 <span class="center">성적관리</span></a>
      	 <ul id="nab_ul_grade">
      	 	<li><a>성적 추가</a></li>
      	 	<li><a>성적 목록</a></li>
      	 	<li><a>성적 조회</a></li>
      	 	<li></li>
      	 	<li><a>성적 삭제</a></li>
      	 </ul>	
      </li>
      <li class="dropdown">
      	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
      	 <span class="center">게시판관리</span></a>
      	 <ul id="nab_ul_board">
      	 	<li><a>게시판 추가</a></li>
      	 	<li><a>게시판 목록</a></li>
      	 	<li><a>게시판 조회</a></li>
      	 	<li></li>
      	 	<li><a>게시판 삭제</a></li>
      	 </ul>	
      </li>
    </ul>
    <span id="com_head">${user.id}&nbsp;<a id="logout">로그아웃</a></span>
  </div>
</nav>
<script>
	app.navbar.init(); 
</script>