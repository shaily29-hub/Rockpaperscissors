let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscores");
const compscorepara=document.querySelector("#compscores");

const gencomputerchoice=()=>{
 const options=["rock","paper","scissors"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
}
const drawgame=()=>{
    // console.log("game was a draw")
    msg.innerText="game was draw,play again";
    msg.style.backgroundColor="#364d46";

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
       userscore++;
       userscorepara.innerText=userscore;
msg.innerText=`you won! your ${userchoice} beats ${compchoice} `;
msg.style.backgroundColor="green";   
    }
    else{
       compscore++;
       compscorepara.innerText=compscore;
        msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";   }
}
const playgame=(userchoice)=>{
console.log("user choice: "+userchoice);
//computer choice->modular functions
const compchoice=gencomputerchoice();
console.log("computer choice: "+compchoice);

if(userchoice===compchoice){
    drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
userwin=compchoice==="scissors" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors"? false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
const userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
// console.log("choice was clicked",userchoice);
playgame(userchoice);
    });
});
