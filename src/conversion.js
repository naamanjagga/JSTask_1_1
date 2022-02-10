function myfunction() {
	var input = document.getElementById('input').value;
   if(document.getElementById('1').checked == true){
       document.getElementById("display").innerHTML = input +" hr" + " =" + input*60 + " minutes"
   }else {
        document.getElementById('display').innerHTML = input +" hr" + " =" + input*3600 + " seconds";
	}
}
