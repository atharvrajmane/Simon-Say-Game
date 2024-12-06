let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let highestscore=0;

let h3=document.querySelector("h3");
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        levelup();
        started=true;
    }
    
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let ranInd=Math.floor(Math.random() * 3);
    let ranCol=btns[ranInd];
    let ranbtn=document.querySelector(`.${ranCol}`);
    gameSeq.push(ranCol)
    console.log(gameSeq);
    btnflash(ranbtn);
}

function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        reset();
    }
}

function btnpress(){
    btnflash(this);

    let btnid=this.id;
    userSeq.push(btnid);

    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    h3.innerText=`Game Over! Your score was ${level} \nPress any key to start game.`;
    if(highestscore<level){
        h2.innerText=`Highest Score : ${level}`;
    }
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
    let body = document.querySelector("body");
    body.classList.add("over");
    setTimeout(function(){
        body.classList.remove("over");
    },250);
    
}
