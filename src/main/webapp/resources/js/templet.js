//이벤트를 걸기 위해 DOM으로 만듦
var compUI={
	br : ()=>{return $('<br/>')},
	div : x=>{return $('<div/>',{ id : x });},
	h1 : x=>{return $('<h1/>',{ id : x });},
	h2 : x=>{return $('<h2/>',{ id : x });},
	h3 : x=>{return $('<h3/>',{ id : x });},
	span : x=>{return $('<span/>',{ id : x });},
	input : (x,y,z)=>{return $('<input/>',{ id : x, name: x, type : y, value : z });},
	aBtn : x=>{return $('<a>',{ href:'#', role:'button', id:x });},
	image : (x,y)=>{return $('<img/>',{ id : x, src : y });},
	
	td : ()=>{return $('<td/>');},
	li : ()=>{return $('<li/>');}
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
				+ '	     <li class="dropdown">'
				+ '	     	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' 
				+ '	     	 <span class="center">배  열</span></a>'
				+ '	     	 <ul id="nab_ul_seq" class="dropdown-menu">'
				+ '	     	 	<li><a id="selBtn">선택정렬</a></li>'
				+ '	     	 	<li><a id="burbleBtn">버블정렬</a></li>'
				+ '	     	 	<li><a id="insertBtn">삽입정렬</a></li>'
				+ '	     	 	<li><a id="rankBtn">석차구하기</a></li>'
				+ '	     	 	<li><a id="binSearchBtn">이분검색</a></li>'
				+ '	     	 	<li><a id="mergeBtn">병합</a></li>'
				+ '	     	 	<li><a id="stackBtn">스택</a></li>'
				+ '	     	 </ul>'
				+ '	     </li>'
				+ '	     <li class="dropdown">'
				+ '	     	 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' 
				+ '	     	 <span class="center">행  열</span></a>'
				+ '	     	 <ul id="nab_ul_seq" class="dropdown-menu">'
				+ '	     	 	<li><a id="Btn_1">기본 5행 5열</a></li>'
				+ '	     	 	<li><a id="Btn_2">직각삼각형</a></li>'
				+ '	     	 	<li><a id="Btn_3">지그재그</a></li>'
				+ '	     	 	<li><a id="Btn_4">다이아몬드</a></li>'
				+ '	     	 	<li><a id="Btn_5">모래시계</a></li>'
				+ '	     	 	<li><a id="Btn_6">오른쪽 빈삼각형</a></li>'
				+ '	     	 	<li><a id="Btn_7">이등변 삼각형</a></li>'
				+ '	     	 	<li><a id="Btn_8">90도 회전</a></li>'
				+ '	     	 	<li><a id="Btn_9">달팽이</a></li>'
				+ '	     	 	<li><a id="Btn_10">대각선채우기</a></li>'
				+ '	     	 	<li><a id="Btn_11">마방진</a></li>'
				+ '	     	 	<li><a id="Btn_12">행렬변환</a></li>'
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

var boardUI = {
		list : ()=>{
			return '<div id="boardContent">'
			+ '  <div class="row">'
			+ '     <div class="col-lg-6" style="width:500px; margin-left: 30%;" >'
			+ '       <div id="input_grp" class="input-group">'
			//+ '         <input id="search" name="search" type="text" class="form-control" placeholder="Search for...">'
			+ '         <span id="input_grp_btn" class="input-group-btn">'
			//+ '           <button class="btn btn-default" type="button" onclick="">Go!!</button>'
			+ '         </span>'
			+ '       </div>'
			+ '     </div>'
			+ '   </div>'
			+ '   <div style="height: 40px; width: 100%; text-align: center;"> 게시글 수 : </div>'
			+ '   <table id="board-tab" style="margin-top: 50px; margin-bottom: auto; margin-right: auto; margin-left: auto; width: 70%; border-collapse: collapse;">'
			+ '      <tr id="tr_title" style="height: 25px;">'
			+ '      </tr>'
			+ '      <tr id="tr_data" style="height: 25px;">'
			+ '      </tr>'
			+ '   </table>'
			+ '   <nav aria-label="Page navigation" style="width:380px; margin:auto">'
			+ '      <ul id="page_form" class="pagination">'
			//+ '         <li id="pgforemost"></li>'
			+ '			<li><a onclick="" href="#"><span class="glyphicon glyphicon-fast-backward" aria-hidden="true"></span></a></li>'
			//+ '         <li id="pgprev"></li>'
			+ '			<li><a onclick="" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
			+ '         <li class="active"><a href="#">1</a></li>'
			+ '         <li><a onclick="">2</a></li>'
			+ '         <li><a onclick="">3</a></li>'
			+ '         <li><a onclick="">4</a></li>'
			+ '         <li><a onclick="">5</a></li>'
			+ '         <li id="pgnext"></li>'
			+ '			<li><a onclick="" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
			//+ '         <li id="pgtail"></li>'
			+ '			<li><a onclick="" href="#"><span class="glyphicon glyphicon-fast-forward" aria-hidden="true"></span></a></li>'
			+ '     </ul>'
			+ '   </nav>'
			+ '</div>'
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
		},
		sort : ()=>{
			return '<div id="content">'
				+ '<h3 id="title" /><br/>'
				+ '<lable id="inputLbl">입력값:&nbsp&nbsp</lable>'
				+ '<br/>'
				+ '<lable id="input_val" />'
				+ '<br/>'
				+ '<lable id="res_sort" />'
				+ '<div>';
		}
};