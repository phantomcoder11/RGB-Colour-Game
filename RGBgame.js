var numSquare=6;
var colors = generateRandomColors(numSquare);
 
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message= document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

for(i=0;i<modeButtons.length;i++){
modeButtons[i].addEventListener("click", function(){
modeButtons[0].classList.remove("selected");
modeButtons[1].classList.remove("selected");
this.classList.add("selected");
if(this.textContent === "EASY"){
	numSquare = 3;
	// alert("Easy selected");
}
else 
numSquare =6;
// this.textContent === "Easy" ? numSquare =3: numSquare=6;
reset();
});
}
function reset(){
	colors = generateRandomColors(numSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked colors
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent="";
	//change colors of square
	for(var i=0; i< square.length; i++){
		if(colors[i]){
			square[i].style.display ="block";
		    square[i].style.backgroundColor = colors[i]; 

		} 
		else{
			square[i].style.display = "none";
		}
	}	
		h1.style.background = "steelblue";



};
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked colors
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for(var i=0; i< square.length; i++){
	square[i].style.backgroundColor = colors[i];
} 
    message.textContent= "";
    h1.style.backgroundColor = "steelblue";
    this.textContent= "new colors";


});
colorDisplay.textContent= pickedColor;

for(var i=0; i<square.length;i++){

  	square[i].style.backgroundColor = colors[i];


square[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;

	if(clickedColor === pickedColor){

for(var i=0; i<square.length;i++){
		square[i].style.backgroundColor = pickedColor;}
		message.textContent="CORRECT";
		h1.style.backgroundColor = pickedColor;
		resetButton.textContent ="Play Again ?";
	} 
	else{
		this.style.backgroundColor= "#232323";
		message.textContent="TRY AGAIN";
	}

	});
	
}

function pickColor(){
var random=Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
	var arr= [];
	for(var i=0; i<num;i++){
     arr.push(randomColors());
	}
	return arr;
}
function randomColors(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}

/*easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquare=3;
    colors= generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ; i<square.length ;i++){
    	if(colors[i]){
    		square[i].style.backgroundColor = colors[i];
    	}
    	else{
    		square[i].style.display = "none";
    	}
    }
    message.textContent= "";

});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquare=6;
    colors= generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ; i<square.length ;i++){
    
    square[i].style.backgroundColor = colors[i];
    square[i].style.display = "block";
}
message.textContent= "";

});*/

