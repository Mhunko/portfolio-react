/*function loadEffect(){
    document.getElementById("body").style.opacity('1');
}
window.onload = () => {
    var body = document.getElementById("body")
    body.style.opacity = "1";
};*/

function openFunction(){
    //console.log('testclick')
    document.getElementById("menu").style.width="300px"
    document.getElementById("mainbox").style.color="rgba(14,14,14,0.12)"
}
function closeFunction(){
    document.getElementById("menu").style.width="0px"
    document.getElementById("mainbox").style.color="#fffcff"
}