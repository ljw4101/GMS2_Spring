/** Ajax javaScript **/
var meta=meta || {}; /*name space*/
meta.common=(function(){
	var init = function(ctx){
		meta.session.init(ctx);
		meta.index.init();
	};
	
	return {init : init}
})();
//var name=()();  /*IIFE*/


/*******************************
 * index.jsp
 * loading.gif
 *******************************/
meta.index=(function(){
	var $wrapper, $navbar, $container, ctx, img;
	var init = function(){
		onCreate();
		meta.ui.init();
	};
	
	var onCreate = function(){
		setContextView();
		
		$('#btn_load').click(()=>{
			alert('click click');
			$container.empty();
			//meta.auth.init();
			meta.ui.navbar();
			meta.ui.drowView();
			$('#arithBtn').click(()=>{
				$('#container').empty();
				meta.ui.drowView();
				$('#title').text('시작값부터 끝값까지 등차수열 합!!');
				$('#result_btn').click(()=>{
					$('#result_msg').text("결과보기: "+meta.algo.arithmetic($('#startVal').val(), $('#endVal').val()));
				});
			});
			$('#switchBtn').click(()=>{
				$('#container').empty();
				meta.ui.drowView();
				$('#title').text('시작값부터 끝값까지 스위치수열 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').val('100').attr('readonly', 'true');
				
				$('#result_btn').click(()=>{
					$('#result_msg').text("결과보기: "+meta.algo.switchSeries($('#startVal').val(), $('#endVal').val()));
				});
			});
			$('#geoBtn').click(()=>{
				$('#container').empty();
				meta.ui.drowView();
				$('#title').text('시작값부터 끝값까지 계차수열 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#result_btn').click(()=>{
					$('#result_msg').text("결과보기: "+meta.algo.geoSeries($('#endVal').val()));
				});
				
			});
			$('#facBtn').click(()=>{
				$('#container').empty();
				meta.ui.drowView();
				$('#title').text('시작값부터 끝값까지 팩토리얼 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').val('10').attr('readonly', 'true');
				$('#result_btn').click(()=>{
					$('#result_msg').text("결과보기: "+meta.algo.factorial($('#startVal').val(), $('#endVal').val()));
				});
			});
			$('#fiboBtn').click(()=>{
				$('#container').empty();
				meta.ui.drowView();
				$('#title').text('시작값부터 끝값까지 피보나치 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').val('20').attr('readonly', 'true');
				$('#result_btn').click(()=>{
					$('#result_msg').text("결과보기: "+meta.algo.fibonacci($('#startVal').val(), $('#endVal').val()));
				});
			});
		});
	};
	
	var setContextView = function(){
		$container=$('#container');
		ctx = $$('x');
		img = $$('i');
		//DOM객체
		var $image = $('<img/>',
				{
					id:'loading', 
					src: img +'/loading.gif'
				}); 
		var $btn = $('<input/>',
				{
					id:'btn_load', 
					type: 'button',
					value: '버튼'
				});
		$container.append($image);
		$container.append($btn);
	};

	return {init : init};
})();


/*******************************
 * algo
 *******************************/
meta.ui = (function(){
	var $wrapper, $navbar, $container, ctx, img, js, css;
	var init = function(){ 
		$wrapper = $('#wrapper');
		$navbar = $('#navbar');
		$container = $('#container');
		img = $$('i');
	};
	
	var navbar = function(){
		$navbar.html(
			'<nav class="navbar navbar-inverse">'
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
			+ '	     	 	<li><a id="geoBtn">등비수열</a></li>'
			+ '	     	 	<li><a id="facBtn">팩토리얼</a></li>'
			+ '	     	 	<li><a id="fiboBtn">피보나치</a></li>'
			+ '	     	 </ul>'
			+ '	     </li>'
			+ '	   </ul>'
			+ '	   <span id="com_head">${user.id}&nbsp;<a id="logout">로그아웃</a></span>'
			+ '	 </div>'
			+ '	</nav>');
	};
	
	var drowView = function(){	
		var ui =
			'<div id="content">'
			+ '<h3 id="title">시작값부터 끝값까지 등차수열 합</h3><br/>'
			+ '<lable id="startLable">시작값:&nbsp&nbsp</lable>'
			+ '<br/>'
			+ '<lable id="endLable">끝값: &nbsp&nbsp&nbsp&nbsp</lable>'
			+ '<br/>'
			+ '<lable id="result_msg">'
			+ '<div>';
		$('#container').html(ui);
		
		$('#startLable').after(meta.comp.input(
				{
					id : 'startVal',
					type : 'text',
				}
			));
		$('#endLable').after(meta.comp.input(
				{
					id : 'endVal',
					type : 'text',
				}
			));
		$('#endVal').after(meta.comp.input(
				{
					id : 'result_btn',
					type : 'button',
					value : '결과보기'
				}
			));
	};
	
	return {
		init : init,
		navbar : navbar,
		drowView : drowView
	};
})();


meta.algo={
	arithmetic : (s, e)=>{
		var start = s*1;
		var end = e*1;
		
		/*1부터 100까지 등차수열 합*/
		var sum=0;
		for(var i=start;i<=end;i++){
			sum = sum + i;
		}
		return sum;
	},
	
	switchSeries : ()=>{
		var i=0, sum=0, sw=0;
        
        do {
           if(sw==0){
              sum=sum+i;
              sw=1;
           }else {
              sum=sum-i;
              sw=0;
           }
           i=i+1;
           
        }while(i<100);
        
        return sum;
	},
	
	geoSeries : x=>{
		var sum=0, seq=0;
		for(var i=1; i<=(x*1); i++){
			if(i==1){
				seq = i;
			}else{
				seq = seq+i;
			}
			sum += seq;
		}
		
		return sum;
	},
	
	factorial : (s,e)=>{
		var sum=0;
		var start = s*1;
		var end = e*1;
		
		for(var i=start; i<=end; i++){
			var fac=1;
			for(var j=start; j<=i; j++){
				fac = fac * j;
			}
			sum += fac;
		}
		return sum;
	},
	
	fibonacci : (s,e)=>{
		var fir=1, sec=1, thir=0;
		var sum = fir + sec;
		var start = s*1;
		var end = e*1;
		
		for(var i=start+2; i<=end; i++){
			thir = fir + sec;
			sum += thir;
			fir = sec;
			sec = thir;
		}
		
		return sum;
	}
};


/*******************************
 * auth
 *******************************/
meta.auth=(function(){
	var $wrapper, ctx, img, js, css;
	var init = function(){
		onCreate();
	};
	
	var onCreate = function(){
		setContextView();
	};
	
	var setContextView = function(){
		$wrapper = $('#wrapper');
		img = $$('i');

		loginView();
	};
	
	var loginView = function(){
		var ui =
			'<div id="container">'
			+ '<header><h1 id="title">LOGIN</h1></header>'
			+ '<hr />'
			+ '<div id=loginImg><img src="'+img+'/login.gif" alt="" /></div>'
			+ '<div id=message style="height: 30px; width: 100%; text-align: center; color: red; font-weight: bold;"></div>'
			+ '<form id="login" name="login">'
			+ 	'<span>ID: </span><input type="text" id="login_id" name="id" value="kang" /><br /><mark>ID는 숫자포함 8자이내</mark><br />'
			+ 	'<label for="">Password: </label><input type="password" id="login_pass" name="pw" value="1" /><br />'
			+ 	'<input type="hidden" name="action" value="login"/>'
			+ 	'<input type="hidden" name="page" value="main"/>'
			+ '</form>'	
			+ '</div>';
		
		$wrapper.html(ui);
		$('#login').append(meta.comp.input(
				{
					id : 'login_btn',
					type : 'submit',
					value : 'LOGIN'
				}
			));
		$('#login').append(meta.comp.input(
				{
					id : 'cancel_btn',
					type : 'reset',
					value : 'CANCEL'
				}
			));
	};
	
	return {
		init : init
	};
})();


/*******************************
 * component
 * 부품들을 (DOM객체)return 하기만 하면 됨
 * 속성이 유동적으로 변하기 때문에 파라미터를 json으로 받음
 *******************************/
//객체 literal 생성방식
meta.comp = 
	{
		input : function(json) {
			return $('<input/>',json);
		}
	};


/*******************************
 * session
 * session :login 후 필요한 정보 담음
 *******************************/
meta.session=
	{
		//set
		init : function(ctx){
					sessionStorage.setItem('x', ctx);	//접근경로를 로그인 할때만 준다(보안)
					sessionStorage.setItem('j', ctx+'/resources/js');
					sessionStorage.setItem('i', ctx+'/resources/img');
					sessionStorage.setItem('c', ctx+'/resources/css');
			   },
		//get
		getPath : function(x){
			return sessionStorage.getItem(x);
		}
	};

//함수
var $$ = function(x){return meta.session.getPath(x);};