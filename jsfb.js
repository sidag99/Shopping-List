var button=document.getElementById("enter");
var userinput=document.getElementById("userInput");
var ul=document.querySelector("ul");

button.addEventListener("click",function(){
	if(userInput.value.length===0 || userInput.value.length>200)
	{
		return 0;
	}
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(userinput.value));
	ul.appendChild(li);
	userInput.value="";
})
userinput.addEventListener("keypress",function(){
	if(userInput.value.length===0 || event.keyCode!=13 ||userInput.value.length>200)
	{
		return 0;
	}
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(userinput.value));
	ul.appendChild(li);
	userInput.value="";
})
