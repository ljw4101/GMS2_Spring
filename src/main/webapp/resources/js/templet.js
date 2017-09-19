var compUI={
	image : (x,y)=>{
		return $('<img/>',{
			id : x,
			src : y
		});
	},
	input : (x,y,z)=>{
		return $('<input/>',{
			id : x,
			type : y,
			value : z
		});
	}
}

var introUI={
	navbar : ()=>{
		return '<nav class="navbar navbar-inverse">'
				+ '  <div class="container-fluid">'
				+ '    <div class="navbar-header">'
				+ '      <a class="navbar-brand" href="#">LEEJIWON</a>'
				+ '    </div>'
				+ '   <ul class="nav navbar-nav">'
				+ '      <li id="go_main"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
				+ '      <li class="dropdown">'
				+ '			<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'
				+ '	     	 <span class="center">회원관리</span></a>'
				+ '	     	 <ul id="nab_ul_stu" class="dropdown-menu">'
				+ '	     	 	<li><a>학생 추가</a></li>'
				+ '	     	 	<li><a>학생 목록</a></li>'
				+ '	     	 	<li><a>학생 조회</a></li>'
				+ '	     	 	<li><a></a></li>'
				+ '	     	 	<li><a>학생 삭제</a></li>'
				+ '	     	 </ul>'
				+ '	     </li>'
				+ '	     <li class="dropdown">'
				+ '	     	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' 
				+ '	     	 <span class="center">성적관리</span></a>'
				+ '	     	 <ul id="nab_ul_grade" class="dropdown-menu">'
				+ '	     	 	<li><a>성적 추가</a></li>'
				+ '	     	 	<li><a>성적 목록</a></li>'
				+ '	     	 	<li><a>성적 조회</a></li>'
				+ '	     	 	<li></li>'
				+ '	     	 	<li><a>성적 삭제</a></li>'
				+ '	     	 </ul>'
				+ '	     </li>'
				+ '	     <li class="dropdown">'
				+ '	     	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' 
				+ '	     	 <span class="center">게시판관리</span></a>'
				+ '	     	 <ul id="nab_ul_board" class="dropdown-menu">'
				+ '	     	 	<li><a>게시판 추가</a></li>'
				+ '	     	 	<li><a>게시판 목록</a></li>'
				+ '	     	 	<li><a>게시판 조회</a></li>'
				+ '	     	 	<li></li>'
				+ '	     	 	<li><a>게시판 삭제</a></li>'
				+ '	     	 </ul>'
				+ '	     </li>'
				+ '	     <li class="dropdown">'
				+ '	     	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' 
				+ '	     	 <span class="center">수  열</span></a>'
				+ '	     	 <ul id="nab_ul_seq" class="dropdown-menu">'
				+ '	     	 	<li><a id="arithBtn">등차수열</a></li>'
				+ '	     	 	<li><a id="switchBtn">스위치수열</a></li>'
				+ '	     	 	<li><a id="geoBtn">계차수열</a></li>'
				+ '	     	 	<li><a id="facBtn">팩토리얼</a></li>'
				+ '	     	 	<li><a id="fiboBtn">피보나치</a></li>'
				+ '	     	 </ul>'
				+ '	     </li>'
				+ '	   </ul>'
				+ '	   <span id="com_head">${user.id}&nbsp;<a id="logout">로그아웃</a></span>'
				+ '	 </div>'
				+ '	</nav>';
	},
	login : (x)=>{
		return '<div id="container">'
			+ '<header><h1 id="title">LOGIN</h1></header>'
			+ '<hr />'
			+ '<div id=loginImg><img src="'+x+'/login.gif" alt="" /></div>'
			+ '<div id=message style="height: 30px; width: 100%; text-align: center; color: red; font-weight: bold;"></div>'
			+ '<form id="login" name="login">'
			+ 	'<span>ID: </span><input type="text" id="login_id" name="id" value="kang" /><br /><mark>ID는 숫자포함 8자이내</mark><br />'
			+ 	'<label for="">Password: </label><input type="password" id="login_pass" name="pw" value="1" /><br />'
			+ 	'<input type="hidden" name="action" value="login"/>'
			+ 	'<input type="hidden" name="page" value="main"/>'
			+ '</form>'	
			+ '</div>';
	}
};

var algoUI = {
		series : ()=>{
			return '<div id="content">'
				+ '<h3 id="title">시작값부터 끝값까지 등차수열 합</h3><br/>'
				+ '<lable id="startLable">시작값:&nbsp&nbsp</lable>'
				+ '<br/>'
				+ '<lable id="endLable">끝값: &nbsp&nbsp&nbsp&nbsp</lable>'
				+ '<br/>'
				+ '<lable id="result_msg">'
				+ '<div>';
		}
};