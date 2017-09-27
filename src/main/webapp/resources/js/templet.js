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
		tbl : ()=>{
			var tbl= '<table id="board-tab" class="table table-hover" style="width: 70%; margin: 0 auto; ">'
		         +'<thead><tr class="hanbit-table tr" >';
	         var a=[
	            {width: '5%', txt:'No'},
	            {width: '10%', txt:'제목'},
	            {width: '30%', txt:'내용'},
	            {width: '10%', txt:'글쓴이'},
	            {width: '15%', txt:'등록일'},
	            {width: '5%', txt:'조회수'}
	            ];
	         
	            $.each(a, (i,j)=>{
	               tbl+='<th style="width: '+j.width
	               +'; text-align: center;">'+j.txt+'</th>'
	            });
	         
	         tbl += '</tr></thead><tbody id="tbody">';
	         tbl += '</tbody></table></div>';
	         
	         return tbl;
		},
		search : ()=>{
			return '<div style="width:90%;margin:20px auto;">'
		          +'	<select id="searchOption" class="form-control" name="searchOption" style="width:20%;float:left;margin-right:36px">'
		          +'		<option value="searchByName" >작성자</option>'
		          +'		<option value="searchByTitle">제목</option>'
		          +'	</select>'
		          +'	<div class="input-group" style="width:60%; float:left; margin-right:30px">'
		          +'		<span class="input-group-addon">SEARCH</span>'
		          +'		<input id="inputsearch" type="text" class="form-control" style="width:100%" name="searchWord" placeholder="작성자 또는 제목을  검색하여 주세요" >'
		          +'	</div>'
		          +'	<input class="btn btn-danger" style="width:100px" name="search" type="submit"  value="SEARCH"/>'
		          +'	<input type="hidden" name="action" value="search"/>'
		          +'	<input type="hidden" name="pageName" value="list" />'
		          +'	<input type="hidden" name="pageNumber" value="1" />'
		          +'</div>'
			      +'<div style="margin:10px 0; margin-left:130px;" >'
			      +'	<span><font color="sky-blue"><strong>총게시글수 : </strong></font></span>'
			      +'	<label id="lbltotal" style="width:30%"></label>'
			      +'	<input id="btnWrite" class="btn btn-warning" style="width:100px; margin-left:43%" type="submit" value="글쓰기">'
			      +'</div>';
		},
		pgnavbar : ()=>{
			return '   <nav aria-label="Page navigation" style="width:380px; margin:auto">'
				+ '      <ul id="page_form" class="pagination">'
				+ '         <li><a onclick="" href="#"><span class="glyphicon glyphicon-fast-backward" aria-hidden="true"></span></a></li>'
				+ '         <li><a onclick="" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>'
				+ '         <li class="active"><a href="#">1</a></li>'
				+ '         <li><a onclick="">2</a></li>'
				+ '         <li><a onclick="">3</a></li>'
				+ '         <li><a onclick="">4</a></li>'
				+ '         <li><a onclick="">5</a></li>'
				+ '         <li><a onclick="" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>'
				+ '         <li><a onclick="" href="#"><span class="glyphicon glyphicon-fast-forward" aria-hidden="true"></span></a></li>'
				+ '     </ul>'
				+ '   </nav>'
				+ '</div>'
		},
		detail : ()=>{
			return '  <div class="page-header" style="margin-left: 10%">'
				+ '      <h1 style="display: inline">게시판</h1>'
				+ '      <a style="font-size: large;">목록가기</a>'
				+ '   </div>'
				+ '   <div class="container">'
				+ '      <div class="row">'
				+ '         <div class="col-md-12">'
				+ '            <div class="well well-sm">'
				+ '               <form class="form-horizontal" method="post">'
				+ '                  <fieldset>'
				+ '                     <legend id="headTitle" class="text-center header">게시글쓰기</legend>'
				+ '                     <div class="form-group">'
				+ '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
				+ '                        <div class="col-md-12">'
				+ '                           <input id="fname" name="title" type="text" placeholder="제목" class="form-control" />'
				+ '                        </div>'
				+ '                     </div>'
				+ '                     <div class="form-group">'
				+ '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
				+ '                        <div class="col-md-12">'
				+ '                           <input id="lname" name="name" type="text"  class="form-control" />'
				+ '                        </div>'
				+ '                     </div>'
				+ '                     <div class="form-group">'
				+ '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
				+ '                        <div class="col-md-12">'
				+ '                           <input id="regdate" name="regdate" type="text" placeholder="등록일" class="form-control" readonly />'
				+ '                        </div>'
				+ '                     </div>'
				+ '                     <div class="form-group">'
				+ '                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>'
				+ '                        <div class="col-md-12">'
				+ '                           <textarea class="form-control" id="message" name="message" rows="15"></textarea>'
				+ '                        </div>'
				+ '                     </div>'
				+ '                     '
				+ '                     <div class="form-group">'
				+ '                        <div class="col-md-12 text-center">'
				+ '                           <button id="btnConfirm" type="submit" style="width: 200px" class="btn btn-primary btn-lg">확 인</button>'
				+ '                           <button id="btnCancel" type="rest" style="width: 200px" class="btn btn-danger btn-lg">취 소</button>'
				+ '                        </div>'
				+ '                     </div>'
				+ '                  </fieldset>'
				+ '               </form>'
				+ '            </div>'
				+ '         </div>'
				+ '      </div>'
				+ '   </div>'
				+ '<div class="modal fade alert" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">'
				+ '<div class="modal-dialog">'
				+ '<div class="modal-content">'
				+ '<div class="modal-header">'
				+ '	  <button type="button" class="close" data-dismiss="modal">'
				+ '	  <span aria-hidden="true">x</span>'
				+ '	  <span class="sr-only">Close</span></button>'
				+ '   <h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>'
				+ '</div>'
				+ '<div class="modal-body">'
				+ '   <form>'
				+ '      <div class="form-group">'
				+ '         <label for="inputPass">Password</label>'
				+ '         <input id="pwd" type="password" class="form-control" placeholder="Enter Password"/>'
				+ '      </div>'
				+ '      <button id="btnDelete" type="submit" style="width:200px;" class="btn btn-primary center-block">확 인</button>'
				+ '   </form>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
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