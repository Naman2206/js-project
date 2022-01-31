// console.log("script is working")
// var username=prompt(username)
// var welcomemessage=("script works!!" +username)
// alert(welcomemessage)
var btntranslate= document.querySelector("#btn-Translate");
var txtinput= document.querySelector("#txt-input");
console.log(txtinput)
function clickeventhandler() {
    
    console.log("clicked");
    console.log("input", txtinput.value);

};
btntranslate.addEventListener("click",clickeventhandler )


