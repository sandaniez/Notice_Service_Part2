$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
		 {
		 $("#alertSuccess").hide();
		 }
		 $("#alertError").hide();
});

//=============================
// SAVE ============================================
		$(document).on("click", "#btnSave", function(event)
		{
			// Clear alerts---------------------
			 $("#alertSuccess").text("");
			 $("#alertSuccess").hide();
			 $("#alertError").text("");
			 $("#alertError").hide();
		// Form validation-------------------
			var status = validateNoticeForm();
			if (status != true)
			 {
			 $("#alertError").text(status);
			 $("#alertError").show();
			 return;
			 }
				// If valid------------------------
				var type = ($("#hidNoticeIDSave").val() == "") ? "POST" : "PUT";
				 	$.ajax(
				 {
				 url : "NoticesAPI",
				 type : type,
				 data : $("#formNotice").serialize(),
				 dataType : "text",
				 complete : function(response, status)
				 {
				 onNoticeSaveComplete(response.responseText, status);
				 }
				 });
				});


function onNoticeSaveComplete(response, status)
	{
	if (status == "success")
			 {
			 var resultSet = JSON.parse(response);
			 if (resultSet.status.trim() == "success")
				 {
				 $("#alertSuccess").text("Successfully saved.");
				 $("#alertSuccess").show();
				 $("#divNoticesGrid").html(resultSet.data);
				 } else if (resultSet.status.trim() == "error")
					 {
					 $("#alertError").text(resultSet.data);
					 $("#alertError").show();
					 }
						 } else if (status == "error")
						 {
						 $("#alertError").text("Error while saving.");
						 $("#alertError").show();
						 } else
							 {
							 $("#alertError").text("Unknown error while saving..");
							 $("#alertError").show();
							 }
							 $("#hidNoticeIDSave").val("");
							 $("#formNotice")[0].reset();
				}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
			{
			
					 $("#hidNoticeIDSave").val($(this).data("noticeid"));
					 $("#nCategory").val($(this).closest("tr").find('td:eq(0)').text());
					 $("#nTitle").val($(this).closest("tr").find('td:eq(1)').text());
					 $("#nDesc").val($(this).closest("tr").find('td:eq(2)').text());
					 $("#nDate").val($(this).closest("tr").find('td:eq(3)').text());
					  $("#nAuthor").val($(this).closest("tr").find('td:eq(4)').text());
			});
			
			
			//REMOVE==============================
			$(document).on("click", ".btnRemove", function(event)
			{
			 	$.ajax(
			 {
					 url : "NoticesAPI",
					 type : "DELETE",
					 data : "noticeID=" + $(this).data("noticeid"),
					 dataType : "text",
					 complete : function(response, status)
			 {
			 			onNoticeDeleteComplete(response.responseText, status);
				 }
				 });
			});


function onNoticeDeleteComplete(response, status)
			{
			if (status == "success")
					 {
					 var resultSet = JSON.parse(response);
					 if (resultSet.status.trim() == "success")
					 {
					 $("#alertSuccess").text("Successfully deleted.");
					 $("#alertSuccess").show();
					 $("#divNoticesGrid").html(resultSet.data);
					 } else if (resultSet.status.trim() == "error")
					 {
						 $("#alertError").text(resultSet.data);
						 $("#alertError").show();
						 }
							 } else if (status == "error")
							 {
							 $("#alertError").text("Error while deleting.");
							 $("#alertError").show();
									 } else
									 {
									 $("#alertError").text("Unknown error while deleting..");
									 $("#alertError").show();
			 }
}

// CLIENT-MODEL================================================================
		function validateNoticeForm()
		{
		// Category
				if ($("#nCategory").val().trim() == "")
		 {
		 return "Insert Notice category.";
		 }
		 
		// title
		if ($("#nTitle").val().trim() == "")
		 {
		 return "Insert title .";
		 }
		
		// descruption
		if ($("#nDesc").val().trim() == "")
		 {
		 return "Insert description.";
		 }


			// 	created date
			if ($("#nDate").val().trim() == "")
			 {
			 return "Insert date .";
			 }
			 
			 // created by
			if ($("#nAuthor").val().trim() == "")
			 {
			 return "Insert author.";
			 }
			return true;
}
