<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="member_head.jsp" />
	<div id=loginImg>
		<img src="${ctx}/img/login.gif" alt="" />
	</div>
	<div id=login>
		<span>ID: </span><input type="text"  /><br /><mark>ID는 숫자포함 8자이내</mark><br />
		
		<label for="">Password: </label><input type="password" /><br />
		
		<button class="gms-background-blue" onclick="window.location.href='member_detail.jsp'">실행</button>
		<button class="gms-background-red" onclick="window.location.href='${ctx}/index.jsp'">취소</button>
	</div>
<jsp:include page="../common/footer.jsp" />