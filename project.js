// console.log("script is working")
// var username=prompt(username)
// var welcomemessage=("script works!!" +username)
// alert(welcomemessage)
var btntranslate= document.querySelector("#btn-Translate");
var txtinput= document.querySelector("#txt-input");
var output=document.querySelector("#output");
console.log(txtinput)
function clickeventhandler() {
    output.innerText="translated :"+txtinput.value;
    
};
btntranslate.addEventListener("click",clickeventhandler )


