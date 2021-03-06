/** Member javaScript **/

/******************************
 * app
 * application :logout 후 필요한 정보 담음
 * session.init 과 같이 다른 곳에 인식하여 사용할 수 없기에 app에 선언되어야 한다.
 * 프록시 패턴
 ******************************/
//app을 최상위 객체로 만듦
var app=app || {};

app.path=(function(){
	var init = function(ctx){
		app.session.init(ctx);	//내부에서 호출하면 함수처럼 사용
		app.auth.init();
		onCreate();
	};
	var onCreate=function(){
		setContentView();
		location.href=ctx()+"/auth/login_view";
	};
	var setContentView=function(){
	};
	
	var ctx=function(){
		return app.session.getPath('ctx');
	};
	var js=function(){
		return app.session.getPath('js');
	};
	var img=function(){
		return app.session.getPath('img');
	};
	var css=function(){
		return app.session.getPath('css');
	};
	
	return {
		init : init,
		ctx : ctx,
		js : js,
		img : img,
		css : css,
		onCreate : onCreate
	}
})();

/*******************************
 * session
 * session :login 후 필요한 정보 담음
 *******************************/
app.session=(function(){
	//set
	var init = function(ctx){
		sessionStorage.setItem('ctx', ctx);	//접근경로를 로그인 할때만 준다(보안)
		sessionStorage.setItem('js', ctx+'/resources/js');
		sessionStorage.setItem('img', ctx+'/resources/img');
		sessionStorage.setItem('css', ctx+'/resources/css');
	};
	
	//get
	var getPath = function(x){
		return sessionStorage.getItem(x);
	}
	
	//클로저 : 객체를 return 
	return {
		init : init,
		getPath : getPath
	}; //객체(JSON : map구조) return -> 외부에서 호출 될 것만 return
	
})();

/*******************************
 * main
 *******************************/
app.main = (function(){
	var init=function(){
		onCreate();
	};
	
	var onCreate=function(){
		setContentView();
		
		var $u1 = $("#main_ul_stu");
		var $u2 = $("#main_ul_grade");
		var $u3 = $("#main_ul_board");
		$u1.addClass("list-group");
		$u2.addClass("list-group");
		$u3.addClass("list-group");
		$('.list-group').children().addClass("list-group-item");
		
		//member
		$('.list-group-item a').eq(0).on('click', function(){
			app.controller.moveTo('member', 'member_add');
		});
		
		$('.list-group-item a').eq(1).on('click', function(){
			app.controller.list('member', 'member_list', '1');
		});
		
		$('.list-group-item a').eq(2).on('click', function(){
			app.controller.detailStud(prompt('조회할 ID'));
		});
		
		$('.list-group-item a').eq(3).on('click', function(){
			app.controller.moveTo('member', 'member_update');
		});
		
		$('.list-group-item a').eq(4).on('click', function(){
			app.controller.deleteTarget('member');
		});
		
		//grade
		$('.list-group-item a').eq(5).on('click', function(){
			app.controller.moveTo('grade', 'grade_add');
		});
		
		$('.list-group-item a').eq(6).on('click', function(){
			app.controller.list('grade', 'grade_list','1');
		});
		
		$('.list-group-item a').eq(7).on('click', function(){
			//app.controller.detailStud(prompt('조회할 ID'));
			app.controller.moveTo('grade', 'grade_detail');
		});
		
		$('.list-group-item a').eq(8).on('click', function(){
			app.controller.moveTo('grade', 'grade_update');
		});
		
		$('.list-group-item a').eq(9).on('click', function(){
			app.controller.deleteTarget('grade');
		});
		
		//board
		$('.list-group-item a').eq(10).on('click', function(){
			app.controller.moveTo('board', 'board_write');
		});
		
		$('.list-group-item a').eq(11).on('click', function(){
			app.controller.list('board', 'board_list','1');
		});
		
		$('.list-group-item a').eq(12).on('click', function(){
			//app.controller.detailStud(prompt('조회할 ID'));
			app.controller.moveTo('board', 'board_detail');
		});
		
		$('.list-group-item a').eq(13).on('click', function(){
			app.controller.moveTo('board', 'board_update');
		});
		
		$('.list-group-item a').eq(14).on('click', function(){
			app.controller.deleteTarget('board');
		});
	};
	
	var setContentView=function(){
		
	};
	
	return{
		init : init
	};
})();

/*******************************
 * auth
 *******************************/
app.auth = (function(){
	var init=function(){
		
		$('#loginBtn').on('click',function(){
			if($('#login_id').val() === ""){
				alert('ID를 입력해 주세요');
				return false;
			}
			if($('#login_pass').val() === ""){
				alert('PASS를 입력해 주세요');
				return false;
			}
			$('#login').attr('action', app.path.ctx()+"/auth/login");
			$('#login').attr('method', 'post');
			return true;
		});
	};
	
	return {
		init : init
	};
})();


/*******************************
 * navbar
 *******************************/
app.navbar = (function(){
	var init=function(){
		onCreate();
	};
	
	var onCreate=function(){
		setContentView();
	};
	
	var setContentView=function(){
		var $nvb1 = $("#nab_ul_stu");
		var $nvb2 = $("#nab_ul_grade");
		var $nvb3 = $("#nab_ul_board");
		var $home = $("#go_main");
		var $logout = $("#logout");
		$nvb1.addClass("dropdown-menu");
		$nvb2.addClass("dropdown-menu");
		$nvb3.addClass("dropdown-menu");
		$home.addClass("active");
		
		//member
		$('.dropdown-menu a').eq(0).on('click', function(){
			app.controller.moveTo('member', 'member_add');
		});
		
		$('.dropdown-menu a').eq(1).on('click', function(){
			app.controller.list('member', 'member_list','1');
		});
		
		$('.dropdown-menu a').eq(2).on('click', function(){
			app.controller.moveTo('member', 'member_search');
		});
		
		$('.dropdown-menu a').eq(4).on('click', function(){
			app.controller.deleteTarget('member');
		});
		
		$('.active a').on('click', function(){
			app.controller.moveTo('common','main');
		});
		
		$logout.on('click', function(){
			app.controller.logoutAction();
		});
		
		//grade
		$('.dropdown-menu a').eq(5).on('click', function(){
			app.controller.moveTo('grade', 'grade_add');
		});
		
		$('.dropdown-menu a').eq(6).on('click', function(){
			app.controller.list('grade', 'grade_list','1');
		});
		
		$('.dropdown-menu a').eq(7).on('click', function(){
			app.controller.moveTo('grade', 'grade_search');
		});
		
		$('.dropdown-menu a').eq(8).on('click', function(){
			app.controller.deleteTarget('grade');
		});
		
		//board
		$('.dropdown-menu a').eq(9).on('click', function(){
			app.controller.moveTo('board', 'board_write');
		});
		
		$('.dropdown-menu a').eq(10).on('click', function(){
			app.controller.list('board', 'board_list','1');
		});
		
		$('.dropdown-menu a').eq(11).on('click', function(){
			app.controller.moveTo('board', 'board_detail');
		});
		
		$('.dropdown-menu a').eq(12).on('click', function(){
			app.controller.deleteTarget('board');
		});
	};
	
	return{
		init : init
	};
})();

/*******************************
 * member
 *******************************/
app.member=(function(){
	var init=function(){
		onCreate();
	};
	
	var onCreate=function(){
		setContentView();
	};
	
	var setContentView =function(){
		$("#updateBtn").on('click', function(){
			/*sessionStorage.setItem('id', $("#detailId").val());
			sessionStorage.setItem('phone', $("#detailPhone").text());
			sessionStorage.setItem('email', $("#detailEmail").text());
			sessionStorage.setItem('title', $("#detailTitle").text());*/
			
			
			app.controller.moveTo('member', 'member_update');
		});
	};

	return {
		init : init
	};
})();

/*******************************
 * grade
 *******************************/
app.grade = (function(){
	var init = function(){
		onCreate();
	};
	
	var onCreate = function(){
		setContentView();
	};
	
	var setContentView = function(){
		
	};
	
	return {
		init : init
	};
})();

/*******************************
 * board
 *******************************/
app.board = (function(){
	var init = function(){
		onCreate();
	};
	
	var onCreate = function(){
		setContendView();
	};
	
	var setContendView = function(){
		
	};
	
	return {
		init : init
	};
})();

/*******************************
 * controller
 *******************************/
app.controller = (function(){
	var init=function(){
		
	};
	
	var moveTo = function(dir, page){
		location.href = app.path.ctx()+'/move/'+dir+'/'+page;
	};
	
	var list=function(controller, page, num){
		location.href = app.path.ctx()+'/'+controller+'/'+page+'/'+num+'/null';
	};
	
	var deleteTarget=function(target){
		var person = prompt(target+'의 ID?');
	};
	
	var logoutAction=function(){
		location.href = app.path.ctx()+"/auth/login_view";
	};

	var searchName=function(controller, page, num){
		var $search = $("#search").val();
		if($search === ""){
			alert("검색할 이름을 입력하세요");
			return false;
		}

		location.href = app.path.ctx()+'/'+controller+'/'+page+'/'+num+'/'+$search;
	};
	
	var detailStud=function(x){
		location.href = app.path.ctx()+'/member/member_detail/'+x;
	};
	
	var updateStud=function(){
		$('#confirmBtn').on('click',function(){
			if($("#pw").val() === $("#confirm").val()){
				$('#updateForm').attr('action', app.path.ctx()+'/student/update');
				$('#updateForm').attr('method','post');
				return true;
			}else{
				alert('입력 비밀번호가 서로 다릅니다.');
		        return false;	
			}
		});
	};
	
	var deleteStud=function(x){
		alert("삭제할 ID: "+x);
		location.href = app.path.ctx()+'/member/member_delete/'+x;
	};
	
	var memberAdd=function(){
		
		$('#join_yes_btn').on('click',function(){
			var $mem_id = $("#id").val();
			var $mem_pw = $("#pw").val();
			var $mem_name = $("#name").val();
			var $mem_birth = $("#birthday").val();
			
			if($mem_id === ""){
				alert('ID를 입력해 주세요');
				return false;
			}
			if($mem_pw === ""){
				alert('PASSWORD를 입력해 주세요');
				return false;
			}
			if($mem_name === ""){
				alert('NAME를 입력해 주세요');
				return false;
			}
			if($mem_birth === ""){
				alert('BIRTH를 입력해 주세요');
				return false;
			}
			
			$('#join_form').attr('action', app.path.ctx()+'/member/member_add');
			$('#join_form').attr('method', 'post');
			return true;
		});
	};
	
	return{
		init : init,
		moveTo : moveTo,
		list : list,
		deleteTarget : deleteTarget,
		logoutAction: logoutAction,
		searchName : searchName,
		detailStud : detailStud,
		updateStud : updateStud,
		deleteStud : deleteStud,
		memberAdd : memberAdd
	};
})();
