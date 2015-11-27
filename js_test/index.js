$(window).load(function prepa()
{
	$("body").css("background-image", "url('style/1339717-1920x1080.jpg')").css("margin", "7%");

head();
body();
footer();
});

function head()
{
var button1 = $("<button>").attr("id", "test").text(buttonPr).css("background-color", "rgb(100,100,100)").css("height", "10%").css("width", "25%").css("display", "inline");
var button2 = $("<button>").attr("id", "test").text(buttonSc).css("background-color", "rgb(100,100,100)").css("height", "10%").css("width", "25%").css("display", "inline");
var button3 = $("<button>").attr("id", "test").text(buttontr).css("background-color", "rgb(100,100,100)").css("height", "10%").css("width", "25%").css("display", "inline");
var button4 = $("<button>").attr("id", "test").text(buttonqu).css("background-color", "rgb(100,100,100)").css("height", "10%").css("width", "25%").css("display", "inline");

$("head").css("display", "inline").append(button1).append(button2).append(button3).append(button4);
}

function body()
{
var buttonacon = $("<button>").attr("id", "test").text("A faire bouton a con qui compte le nombre de clic").css("background-color", "rgb(100,100,100)").css("height", "10%").css("width", "25%").css("display", "inline");

var section1 = $("<section>").attr("id", "sectionpr");
var divsection1 = $("<div>").attr("id", "divpr").css("background-color", "rgb(150,150,150)").css("border-style", "outset");
var para1 = $("<p>").text(textdivpr).attr("margin", "15%").css("text-align", "center");
var h1= $("<h1>").text(titredivpr);

$("body").append(section1);
$(section1).append(divsection1);
$(divsection1).append(para1);
$(para1).prepend(h1);
}

function footer()
{

}