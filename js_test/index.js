function prepa()
{
	var head1 = $("<div>").attr("id", "divheader").text("Test Header").css("text-align", "center");
	var sep = $("<hr>");
	var div1 = $("<section>").text("Test Div");
	var footer1 = $("<footer>").text("Test Footer");
	var button1 = $("<button>").attr("id", "test").text("Panel").css("background-color", "rgb(100, 100, 100)").css("border", "none").css("height", "10%").css("width", "25%");

	$("body").css("margin", "0%").append(div1).append(footer1);
	$("head").css("margin", "0%").css("display", "inline").append(head1).append(button1).append(sep);
}