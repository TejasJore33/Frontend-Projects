let gameSeq =[];
let userSeq=[];

let started = false;
let level = 0;

let btns =["yellow","red","purple","green"];

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 1000);
}


function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randoColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randoColor}`);
    console.log(randIdx);
    console.log(randbtn);
    console.log(randoColor);
    btnFlash(randbtn);

}