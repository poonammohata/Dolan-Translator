var btnTranslate=document.querySelector("#btn-translator");
var textInput=document.querySelector("#text-input");
var textTranslate=document.querySelector("#text-translate");

var url="https://api.funtranslations.com/translate/dolan";

function urlUpdate(text){
    var urlExtension=url+"?text="+text;
    console.log(urlExtension)
    return urlExtension;
}
function errorHandle(error){
    console.log("error occured "+error);
    alert("there is some problem at server,check it after some time");
}
btnTranslate.addEventListener("click",function clickEventHandler(){
    var textInputValue=textInput.value;
    fetch(urlUpdate(textInputValue))
    .then(function responseConverter(response){
        return response.json();
    })
    .then(function jsonOutput(json){
        var textTrans=json.contents.translated
        textTranslate.innerHTML=textTrans;
    })
    .catch(errorHandle)
})
