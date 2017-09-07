<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"name="viewport" content="width=device-width, initial-scale=1.0">
<title>login</title>	
</head>
<body><div id="wrapper">
	<header>
		<h1 id="title">LOGIN</h1>
	</header>
	<hr />

	<div id=loginImg>
		<img src="${path.img}/login.gif" alt="" />
	</div>
	<form id="login" name="login"> <!-- 1. CommonController 호출 -->
		<span>ID: </span><input type="text" id="login_id" name="id" value="kang" /><br /><mark>ID는 숫자포함 8자이내</mark><br />
		<label for="">Password: </label><input type="password" id="login_pass" name="pw" value="1" /><br />
		
		<input id="loginBtn" type="submit" value="LOGIN"/>
		<input type="reset" value="CANCEL"/>
		<input type="hidden" name="action" value="login"/>
		<input type="hidden" name="page" value="main"/>
	</form>
</div>
<script>
	app.auth.init();	
</script>
</body>
</html>