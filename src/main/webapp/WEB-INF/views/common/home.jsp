<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- sessionScope 는 생략 가능: 범위가 크기 때문 (requestScope은 명시해야 됨) -->
<img src="${path.img}/loader.gif" alt="" /> 

<script>
	app.path.init('${path.ctx}');
</script>
