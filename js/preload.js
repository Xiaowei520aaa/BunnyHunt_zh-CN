schedule("window", preloadImages);

var imageArray = ["images/bomb.png", "images/bunny.png", "images/bunny1.png", "images/bunny2.png", "images/bunny3.png", "images/bunny4.png", "images/bunny5.png", "images/button_green.gif", "images/button_red.gif", "images/cloud.png", "images/cloud2.png", "images/hill.png", "images/hill2.png", "images/hills.png", "images/lives.gif", "images/stage.jpg"];
var imageObjects = [];
var currImage = 0;

function preloadImages()
{
	var loadingMessage = document.getElementById("loadingMessage");
	var loadingMessageP = loadingMessage.getElementsByTagName("p")[0];
	
	if (currImage >= imageArray.length)
	{
		loadingMessage.innerHTML = ('<h1>' + _("Bunny<br>Hunt IV") + '</h1><p>' + _("The Good Friday Massacre") + '</p>');
		loadingMessage.innerHTML += ('<input class="button" id="startButton" type="button" value="' + _("let's shoot some bunnies") + '!" onClick="ready()">');
		
	}
	else
	{
		imageObjects[currImage] = new Image();
		imageObjects[currImage].onload = preloadImages;
		imageObjects[currImage].src = imageArray[currImage] + "?" + Math.random();
		
		loadingMessageP.innerHTML = _("Images loaded: ")+ "<strong>" + (currImage + 1) + "/"+ imageArray.length + "</strong>";

		var loadingBar = loadingMessage.getElementsByTagName("div")[1];
		loadingBar.style.width = Math.ceil((currImage + 1) / imageArray.length * 100) + "%";

		currImage++;
	}
	
	return true;
};

function ready()
{
	var stage = document.getElementById("stage");
	stage.className = "ready";
	
	var splash = document.getElementById("splash");
	splash.className = "ready";
	
	initBunnies();
	
	return true;
};