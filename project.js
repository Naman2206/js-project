console.log("script is working")
var username=prompt(username)
var welcomemessage=("script works!!" +username)
alert(welcomemessage)
var btntranslate= document.querySelector("#btn-Translate");
console.log(btntranslate)
btntranslate.addEventListener("click",function clickeventhandler(){
    console.log("clicked")
} )