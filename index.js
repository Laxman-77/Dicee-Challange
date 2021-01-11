var num1= Math.floor(6*Math.random()+1);

//document.querySelector("img.img1").src="images/dice"+num1+".png";
document.querySelector("img.img1").setAttribute("src","images/dice"+num1+".png");


var num2= Math.floor(6*Math.random()+1);

document.querySelector("img.img2").src="images/dice"+num2+".png";


if(num1>num2){
	document.querySelector("h1.result").textContent="🚩 Player 1 Wins!";
}
else if(num1<num2)
{
	document.querySelector("h1.result").textContent="Player 2 Wins! 🚩";	
}
else
{
	document.querySelector("h1.result").textContent="Match Draw!";
}