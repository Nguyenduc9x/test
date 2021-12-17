
function myFunction() {
	document.getElementById("van1").innerHTML = "chao moi nguoi";     // lenh Document.getElementById(Id de lien ket voi ben html).innerHTML =" van ban hoac phuong thuc tinh"
	document.getElementById("van2").innerHTML = "hay lam";		
}
function tinh(){
	var x = tinh(4, 3);
	document.getElementById("demo").innerHTML = x;
}
function chayso(){
	let text = "";
	for (let i = 0; i < 10; i++) {
		if (i === 3) {
			continue; 
			}
		text += "The number is " + i + "<br>";
	}
	document.getElementById("t1").innerHTML = text;
}
function dungsai(){
	var x = 3;
	var y = 4;
	if(x == y){
		document.getElementById("t2").innerHTML= "dung";
	}
	else{
		document.getElementById("t2").innerHTML= "sai";
	}
}