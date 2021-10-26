var number = Math.floor(Math.random()*5)+1;
var timer1 = 0;
var timer2 = 0;


	
function setSlide(slidenr){
		clearTimeout(timer1);
		clearTimeout(timer2);
		
		number = slidenr-1;
		
		hide();
		setTimeout("changeSlide()", 500);
}

function hide(){
	$("#slider").fadeOut(500);
}

function changeSlide(){
	number++;
	if (number>3) number=1;
	var file = "<img src=\"slides/slide"+number+".png\"/>";
	
	document.getElementById("slider").innerHTML = file;
	$("#slider").fadeIn(500);
	
	/*timer1 = setTimeout("changeSlide()", 5000);
	timer2 = setTimeout("hide()", 45000);*/
	
}
