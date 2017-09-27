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
	};
	
	var onCreate = function(){
		//setContextView(); 이벤트와 $.getScript scope이 달라서 onCreate에 하나로 작동하게 함
		$.getScript(temp, ()=>{
			compUI.div('content').css({'margin': 'auto', 'width': '100%'}).appendTo($container);
			$content = $('#content');
			compUI.image('loading', img+'/loading.gif').appendTo($content);
			compUI.h3('hbtn').attr('displsy','inline').appendTo($content);
			$hbtn = $('#hbtn');
			
			$hbtn.append(compUI.span('btn_load')).attr('displsy','inline');
			$('#btn_load').html('버튼').addClass('label label-info');
			$hbtn.append(compUI.span('algoBtn')).attr('displsy','inline');
			$('#algoBtn').html('알고리즘').addClass('label label-default').css({'margin-left':'10px'});
			$hbtn.append(compUI.span('membtn')).attr('displsy','inline');
			$('#membtn').html('회원관리').addClass('label label-primary').css({'margin-left':'10px'});
			
			compUI.span('boardbtn').html('게시판').addClass('label label-success').css({'margin-left':'10px'})
			.appendTo($hbtn)
			.click(()=>{
				$content.empty();
				meta.board.list();
			});
			
			$hbtn.append(compUI.span('gradebtn')).attr('displsy','inline');
			$('#gradebtn').html('성적관리').addClass('label label-warning').css({'margin-left':'10px'});
			$hbtn.append(compUI.span('btn6')).attr('displsy','inline');
			$('#btn6').html('버튼').addClass('label label-danger').css({'margin-left':'10px'});
			
			$('#algoBtn').click(()=>{
				$container.empty();
				meta.navbar.init();
				
				$('#result_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#result_msg').text("결과보기: "+series.arithmetic($('#startVal').val(), $('#endVal').val()));
					});
				});
			});
			$('#membtn').click(()=>{
				$container.empty();
				meta.auth.init();
				
				$('#login_btn').click(()=>{
					alert('로그인');
				});
			});
			
			$('#gradebtn').click(()=>{
				$container.empty();
				var url = ctx+'/get/grade/list';
				$.getJSON(url, x=>{
					alert('x msg is '+x.msg);
				});
				//meta.navbar.init();
			});
		});
	};
	
	var setContextView = function(){ };

	return {init : init};
})();


/*******************************
 * board 기능
 *******************************/
meta.board=(()=>{
	var $container, ctx, js, temp;
	var init = function(){
		ctx = $$('x');
		js=$$('j');
		temp=js+'/templet.js';
		$container = $('#container');
	};
	
	var list = x=>{
		init();
		
		var url = ctx+'/list/board'; //get(read):생략가능
		$.getJSON(url, data=>{
			$content.html(boardUI.search());
			var tbl = boardUI.tbl();
			var tr ='';
			/* 배열 형태
			 * var a=[
				{ a:1, b:'한국인사', c:'안녕', d:'길동', e:'2017-09-10', f:10},
				{ a:2, b:'미국인사', c:'hello', d:'마이클', e:'2017-09-10', f:10},
				{ a:3, b:'중국인사', c:'니하오', d:'길동', e:'2017-09-10', f:10},
				{ a:4, b:'일본인사', c:'곤니찌와', d:'길동', e:'2017-09-10', f:10},
				{ a:5, b:'태국인사', c:'사와디캅', d:'길동', e:'2017-09-10', f:10}
			];
			alert('x msg is '+data.result); */
			$('#lbltotal').html(data.total.count);
			
			$.each(data.list, (i,j)=>{
				tr += '<tr class="tr_height">'
					+ '<td>'+j.articleSeq+'</td>'
					+ '<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
					+ '<td>'+j.content+'</td>'
					+ '<td>'+j.id+'</td>'
					+ '<td>'+j.regdate+'</td>'
					+ '<td>'+j.hitcount+'</td>'
					+ '</tr>'
			});
			
			//console.log('tr : '+tr);
			$content.append(tbl);
			$('#tbody').html(tr);
			$content.append(boardUI.pgnavbar());
			
			$('#btnWrite').click(()=>{
				alert('글쓰기');
				$.getScript(temp,()=>{
					$container.empty();
					compUI.div('content').css({'margin': 'auto', 'width': '100%'}).appendTo($container);
					$('#content').html(boardUI.detail());
		        });
			});

		});
	};
	
	var detail = x=>{
		init(); 
		var url = ctx + '/get/board/'+x;
		$.getJSON(url, data=>{
			$.getScript(temp,()=>{
				compUI.div('content').css({'margin': 'auto', 'width': '100%'}).appendTo($container);
				$('#content').html(boardUI.detail());
				$('#headTitle').html('게시글 보기');
				
				$('#fname').val(data.detail.title);
				$('#lname').val(data.detail.id);
				$('#regdate').val(data.detail.regdate);
				$('#message').val(data.detail.content);
				var _seq = data.detail.articleSeq;
				var _writer = $('#lname').val();
				
				$('#btnConfirm').html('수 정')
				.click( e =>{
					e.preventDefault(); //form 태그의 submit 기능을 막음
					
					$('#headTitle').html('게시글 수정');
					$('#btnConfirm').html('확 인').click( e =>{
						e.preventDefault(); //submit 기능을 막음
						update(_seq);
					});
					$('#btnCancel').html('취 소').attr('id','btnReset').attr('type', 'reset').removeAttr('data-toggle').removeAttr('data-target');
				});
				
				$('#btnCancel').attr('data-toggle','modal').attr('data-target','#modal').addClass('btn','btn-primary').html('삭 제')
				.click( e=>{
					e.preventDefault(); //submit 기능을 막음
					$('#btnDelete').click( e=>{
						e.preventDefault();
						var _pass = $('#pwd').val();
						alert(_pass);
						deleteArticle({
							'articleSeq' : _seq,
							'title' : _pass,
							'id' : _writer
						});
					});
				});
	        });
		});
	};
	
	var update = x=>{
		init();
		
		var _title = $('#fname').val();
		var _writer = $('#lname').val();
		var _message = $('#message').val();
		
		$.ajax({
			url : ctx+'/put/board',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify({
				//name은 Bean과 명칭이 동일해야 함
				'articleSeq' : x,
				'title' : _title,
				'id' : _writer,
				'content' : _message
			}),
			contentType : 'application/json',  //html body문법
			success : d=>{
				alert('ajax 통신 성공'+d.msg);
				detail(x);
			},
			error : (x,s,m)=>{
				alert('글 수정시 에러발생! '+m);
			}
		});
	};
	
	var deleteArticle = x=>{
		init();
		
		$.ajax({
			url : ctx+'/delete/board',
			method : 'post',
			dataType : 'json',
			data : JSON.stringify(x),
			contentType : 'application/json',  //html body문법
			success : d=>{
				if(d.msg==="success"){
					alert('삭제 성공!');
					list();
				}else{
					alert('비밀번호가 다릅니다.');
				}
			},
			error : (x,s,m)=>{
				alert('글 수정시 에러발생! '+m);
			}
		});
	};
	
	return {
		list : list,
		detail : detail,
		update : update
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
			
			//수열
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
			
			//배열
			$('#selBtn').click(()=>{
				$('#container').empty();
				//drowUI
				$('#container').html(algoUI.sort());
				var $start = compUI.input('inputVal','text','');
		        var $input_btn = compUI.input('input_btn','button','입력');
		        var $rest_btn = compUI.input('res_btn','button','정렬하기');
		        $('#inputLbl').after($start);
		        $start.after($input_btn);
		        $input_btn.after($rest_btn);
				$('#title').text('선택정렬!!');
				
				var arr = new Array();
				$('#input_btn').click(()=>{
					arr.push($('#inputVal').val()*1);
					var val='';
					for(var i=0;i<=arr.length-1;i++){
						val += arr[i]+" ";
					}
					
					$.getScript(algo, ()=>{
						$('#input_val').text("입력한 값: "+val);
						$('#inputVal').val('');
					});
				});
				
				$('#res_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#res_sort').text("정렬결과: "+sort.selection(arr));
					});
				});
			});
			$('#burbleBtn').click(()=>{
				$('#title').text('버블정렬!!');
				
				var arr = new Array();
				$('#input_btn').click(()=>{
					arr.push($('#inputVal').val()*1);
					var val='';
					for(var i=0;i<=arr.length-1;i++){
						val += arr[i]+" ";
					}
					
					$.getScript(algo, ()=>{
						$('#input_val').text("입력한 값: "+val);
						$('#inputVal').val('');
					});
				});
				
				$('#res_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#res_sort').text("정렬결과: "+sort.burble(arr));
					});
				});
			});
			$('#insertBtn').click(()=>{
				$('#title').text('삽입정렬!!');
				
				var arr = new Array();
				$('#input_btn').click(()=>{
					arr.push($('#inputVal').val()*1);
					var val='';
					for(var i=0;i<=arr.length-1;i++){
						val += arr[i]+" ";
					}
					
					$.getScript(algo, ()=>{
						$('#input_val').text("입력한 값: "+val);
						$('#inputVal').val('');
					});
				});
				
				$('#res_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#res_sort').text("정렬결과: "+sort.insertion(arr));
					});
				});
			});
			$('#rankBtn').click(()=>{
				$('#title').text('석차구하기!!');
				
				var arr = new Array();
				$('#input_btn').click(()=>{
					arr.push($('#inputVal').val()*1);
					var val='';
					for(var i=0;i<=arr.length-1;i++){
						val += arr[i]+" ";
					}
					
					$.getScript(algo, ()=>{
						$('#input_val').text("입력한 값: "+val);
						$('#inputVal').val('');
					});
				});
				
				$('#res_btn').click(()=>{
					$.getScript(algo, ()=>{
						$('#res_sort').text("정렬결과: "+sort.ranking(arr));
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