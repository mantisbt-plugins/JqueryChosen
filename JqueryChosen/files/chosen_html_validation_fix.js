$(document).ready(function() {

	// add tooltip for required but invalid fields
	$("select.chosen-plugin-auto-hide[required]").each(function()  {
		$(this).on("invalid", function() {
			var item = $(this).next("div");
			item.css("border","1px solid orange");
			item.attr("title",REQUIRED).tooltip({
				content: REQUIRED
			}).mouseover();

			// remove tooltip when changes are made
			$(this).on("change", function() {
				$(this).next("div")
					.css("border","none")
					.removeAttr("title").tooltip("destroy");
			});

		});



	});


});
