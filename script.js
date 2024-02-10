
// multiple way of click event

const h1 = document.getElementById("h1");

function textChange(){
    h1.innerText = "changed";
}
function textChange2(){
    document.getElementById("h1").innerText = "Dom spacial event";
    
}
const greenBtn = document.getElementById('makeGreen')

greenBtn.onclick = makeGreen;

function makeGreen(){
    document.body.style.backgroundColor = "green";
    h1.style.color = 'white'
}

const redBtn = document.getElementById('makeRed');

redBtn.onclick = function makeRed(){
    document.body.style.backgroundColor = "red"
    h1.style.color = 'white'
}

const yellowBtn = document.getElementById('makeYellow');

yellowBtn.addEventListener('click', ()=>{
   document.body.style.backgroundColor = 'blue';
   h1.style.color = 'white'
})




