<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
	<div class="container" style="width:60%">
		<div class="row main">
			<div class="panel-heading">
	              <div class="panel-title text-center">
	              		<h1 id="updateId" class="title">${stud.id} Information Update</h1>
	              		<hr />
	              	</div>
	           </div> 
			<div class="main-login main-center">
				<form id="updateForm" name="updateForm" class="form-horizontal">
					<div class="form-group">
						<label for="name" class="cols-sm-2 control-label">Name</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
								<input name="name" id="name" type="text" class="form-control" value="${stud.name}"/>
								<input type="hidden" id="id" name="id" value="${stud.id}" /> <!-- parameterType의 Bean과 이름이 같아야 한다. -->
							</div>
						</div>
					</div>
	
					<div class="form-group">
						<label for="email" class="cols-sm-2 control-label">Email</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
								<input name="email" id="email" type="text" class="form-control" value="${stud.email}"/>
							</div>
						</div>
					</div>
	
					<div class="form-group">
						<label for="username" class="cols-sm-2 control-label">Phone</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
								<input name="phone" id="phone" type="text" class="form-control" value="${stud.phone}"/>
							</div>
						</div>
					</div>
	
					<div class="form-group">
						<label for="password" class="cols-sm-2 control-label">Password</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
								<input name="pw" id="pw" type="password" class="form-control" data-toggle="popover" placeholder="Enter your Password"/>
							</div>
							<span id="passwordInfo" class="hide">
							    <ul>
							        <li>At least 6 characters.</li>
							        <li>Use of special Characters like, [@, $].</li>
							        <li>Use of uppercase [A – Z] and lowercase [a – z] letters.</li>
							        <li>Use of numbers [0 – 9].</li>
							    </ul>
							</span>
							<span id="result"></span>
						</div>
					</div>
	
					<div class="form-group">
						<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
						<div class="cols-sm-10">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
								<input name="confirm" id="confirm" type="password" class="form-control" placeholder="Confirm your Password"/>
							</div>
							<span id="confirmPass"></span>
						</div>
					</div>
	<div style="height: 100px"></div>
					<div class="form-group ">
						<input id="confirmBtn" type="submit" value="UPDATE" class="btn btn-primary btn-lg btn-block login-button"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	<script>
		app.controller.updateStud();
	</script>
<jsp:include page="../common/footer.jsp" />