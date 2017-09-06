<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="board_head.jsp" />
	<div id="add_container">
		<form action="" id="board_write" method="get" class="with-100pro">
			<textarea name="write" cols="50" rows="20"></textarea><br />
			<input type="submit" id="add_submit" value="Submit" class="gms-background-blue">
		</form>
	</div>
<jsp:include page="../common/footer.jsp" />