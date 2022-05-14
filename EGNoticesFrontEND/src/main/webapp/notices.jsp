<%@page import="com.Notice"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>


<!DOCTYPE html>
<html>
	<head>
			<link rel="stylesheet" href="Views/bootstrap.min.css">
			<script src="Components/jquery-3.6.0.js"></script>
			<script src="Components/notices.js"></script>
			<meta charset="ISO-8859-1">
		<title>Notices Management</title>
	</head>
	<body>
		<div class="container"><div class="row"><div class="col-6"> 
			<h1>Notice Board</h1>
				<form id="formNotice" name="formNotice">
 				Notice Category: 
 				<input id="nCategory" name="nCategory" type="text" 
 				class="form-control form-control-sm">
				 <br> Title: 
				 <input id="nTitle" name="nTitle" type="text" 
				 class="form-control form-control-sm">
				 <br> Description: 
				 <input id="nDesc" name="nDesc" type="text" 
				 class="form-control form-control-sm">
				 <br> Create Date: 
				 <input id="nDate" name="nDate" type="text" 
				 class="form-control form-control-sm">
				  <br> Created By: 
				 <input id="nAuthor" name="nAuthor" type="text" 
				 class="form-control form-control-sm">
				 <br>
				 
				 
 				<input id="btnSave" name="btnSave" type="button" value="Submit" class="btn btn-primary">
 				<input type="hidden" id="hidNoticeIDSave" name="hidNoticeIDSave" value="">
				</form>
			<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		<br>
	<div id="divNoticesGrid">
 <%
 Notice noticeObj = new Notice(); 
  out.print(noticeObj.readNotices());
 %>
		</div>
</div> </div> </div> 
</body>
</html>


