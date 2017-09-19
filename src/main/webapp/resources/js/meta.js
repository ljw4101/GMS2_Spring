/** Ajax javaScript **/
var meta=meta || {}; /*name space*/
meta.common=(function(){
	var init = function(ctx){
		meta.session.init(ctx);
		meta.index.init();
	};
	
	return {init : init}
})();


/*******************************
 * index.jsp
 * loading.gif
 *******************************/
meta.index=(function(){
	var $wrapper, $navbar, $container, ctx, img, js, algo, temp;
	var init = function(){
		ctx = $$('x');
		img = $$('i');
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/templet.js';
		
		$container=$('#container');
		onCreate();
		//meta.ui.init();
	};
	
	var onCreate = function(){
		//setContextView(); 이벤트와 $.getScript scope이 달라서 onCreate에 하나로 작동하게 함
		$.getScript(temp, ()=>{
			var $image = compUI.image('loading', img+'/loading.gif');
			$container.append($image);
			
			var $btn = compUI.input('btn_load', 'button', '버튼');
			$('#loading').after($btn);
			
			$('#btn_load').click(()=>{
				alert('click click');
				$container.empty();
				//meta.auth.init();
				meta.navbar.init();
				//meta.ui.init();
				
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.arithmetic($('#startVal').val(), $('#endVal').val()));
					});
				});
			});
		});
	};
	
	var setContextView = function(){ };

	return {init : init};
})();


/*******************************
 * navbar
 *******************************/
meta.navbar = (function(){
	var $navbar, algo, temp, js;
	var init = function(){
		js=$$('j');
		algo=js+'/algo.js';
		temp=js+'/templet.js';
		$navbar = $('#navbar');
		$container = $('#container');
		onCreate();
	};
	
	var onCreate=function(){
		$.getScript(temp, ()=>{
			$('#container').html(algoUI.series());
			
			var $start = compUI.input('startVal','text','');
	        var $end = compUI.input('endVal','text','');
	        var result_btn = compUI.input('result_btn','button','결과보기');

	        $('#startLable').after($start);
	        $('#endLable').after($end);
	        $end.after(result_btn);
			
	        
			$navbar.html(introUI.navbar());
			
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
			
			$('#arithBtn').click(()=>{
				//$('#container').empty();
				$('#title').text('시작값부터 끝값까지 등차수열 합!!');
				$('#startVal').attr('readonly', 'false');
				$('#endVal').attr('readonly', 'false');
				
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.arithmetic($('#startVal').val(), $('#endVal').val()));
					});
				});
			});
			$('#switchBtn').click(()=>{
				//$('#container').empty();
				$('#title').text('시작값부터 끝값까지 스위치수열 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').val('100').attr('readonly', 'true');
				
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.switchSeries($('#startVal').val(), $('#endVal').val()));
					});
				});
			});
			$('#geoBtn').click(()=>{
				//$('#container').empty();
				$('#title').text('시작값부터 끝값까지 계차수열 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').attr('readonly', 'false');
				
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.diffSeries($('#endVal').val()));
					});
				});
				
			});
			$('#facBtn').click(()=>{
				//$('#container').empty();
				$('#title').text('시작값부터 끝값까지 팩토리얼 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').val('10').attr('readonly', 'true');
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.factorial($('#startVal').val(), $('#endVal').val()));
					});
				});
			});
			$('#fiboBtn').click(()=>{
				//$('#container').empty();
				$('#title').text('시작값부터 끝값까지 피보나치 합!!');
				$('#startVal').val('1').attr('readonly', 'true');
				$('#endVal').val('20').attr('readonly', 'true');
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.fibonacci($('#startVal').val(), $('#endVal').val()));
					});
				});
			});
		});
	};
	
	var setContextView = function(){ };
	
	return{
		init : init
	};
})();


/*******************************
 * auth
 *******************************/
meta.auth=(function(){
	var $wrapper, $container, ctx, img, js, css, temp;
	var init = function(){
		$container = $('#container');
		img = $$('i');
		js=$$('j');
		temp=js+'/templet.js';
		onCreate();
	};
	
	var onCreate = function(){
		$.getScript(temp, ()=>{
			$container.html(introUI.login(img));
			
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
		});		
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