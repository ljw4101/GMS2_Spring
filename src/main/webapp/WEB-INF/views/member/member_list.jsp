<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<hr />
	<div id="container">
		<div class="row">
		  <div class="col-lg-6" style="width:500px; margin: auto">
		    <div class="input-group">
		      <input id="search" name="search" type="text" class="form-control" placeholder="Search for...">
		      <span class="input-group-btn">
		        <button class="btn btn-default" type="button" onclick="app.controller.searchName('member', 'member_list', '1')">Go!</button>
		      </span>
		    </div><!-- /input-group -->
		  </div><!-- /.col-lg-6 -->
		</div><!-- /.row -->
		
		<div style="height: 40px; width: 100%; text-align: center;">
		회원수 : ${count}
		</div>
		
		<table id="memlist-tab">
			<tr>
				<th>No.</th>
				<th>ID</th>
				<th>이름</th>
				<th>생년월일</th>
				<th>전화번호</th>
				<th>이메일</th>
				<th>수강과목</th>
				<th>등록일</th>
				<th>수정/삭제</th>
			</tr>
			<!-- var="i": 객체 -->
			<c:forEach var="i" items="${list}">
			<tr>
				<!-- StudBean과 동일해야 됨 -->
				<td><fmt:formatNumber value="${i.num}" pattern="."/></td> <!-- StudDTO에서 int로 변경해도 동일한 기능함 -->
				<td>${i.id}</td>
				<td><a onclick="app.controller.detailStud('${i.id}')">${i.name}</a></td>
				<td>${i.ssn}</td>
				<td>${i.phone}</td>
				<td>${i.email}</td>
				<td>${i.title}</td>
				<td>${i.regdate}</td>
				<td>
					<a onclick="app.controller.updateStud('${i.id}')">수정</a>
					/
					<a onclick="app.controller.deleteStud('${i.id}')">삭제</a>
				</td>
			</tr>
			</c:forEach>
		</table>
		
		<nav aria-label="Page navigation" style="width:380px; margin:auto">
		  <ul id="page_form" class="pagination">
		  	<!-- Previous -->
		  	<c:if test="${prevBlock gt 0}">
			  	<li><a onclick="app.controller.list('member', 'member_list', '1')" href="#"><span class="glyphicon glyphicon-fast-backward" aria-hidden="true"></span></a></li>
			    <li><a onclick="app.controller.list('member', 'member_list', '${prevBlock}')"href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
			    </li>
		    </c:if>
			
		    <!-- Body / varStatus="i": int i -->
		    <c:forEach varStatus="i" begin="${startPage}" end="${endPage}" step="1"> 
			    <c:choose>
			    	<c:when test="${pageNumber eq i.index}">
			    		<li class="active"><a href="#">${i.index}</a></li>
			    	</c:when>
			    	<c:otherwise>
			    		<li><a onclick="app.controller.list('member','member_list','${i.index}')">${i.index}</a></li>
			    	</c:otherwise>
			    </c:choose>
		    </c:forEach>
		    
		    <!-- Next -->
		    <c:if test="${nextBlock le theNumberOfPages}">	    
			    <li><a onclick="app.controller.list('member', 'member_list', '${endPage+1}')" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
			    <li><a onclick="app.controller.list('member', 'member_list', '${theNumberOfPages}')" href="#"><span class="glyphicon glyphicon-fast-forward" aria-hidden="true"></span></a></li>
		 	</c:if>
		  </ul>
		</nav>
	</div>