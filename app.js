let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw";
};
const showWinner=(userwin,iduser,compchoices)=>{
    if(userwin){
        userscore++;
        user.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win!${iduser} beats ${compchoices}`;
        msg.style.backgroundColor="green";
        
        
    }else{
        compscore++;
        comp.innerText=compscore;
        console.log("you lose");
        msg.innerText=`you lose! ${compchoices} beats ${iduser}`;
        msg.style.backgroundColor="red";
        
    }
}
//generate userChoice
const playGame=(iduser)=>{
    console.log("user choice=",iduser);
const compchoices=gencompchoice();
console.log("comp choice=",compchoices);    
    // generate comp choice
   if(iduser===compchoices) {
    drawGame();
   } else{
    let userwin=false;
    if(iduser==="rock"){
        userwin=compchoices==="scissor"?true:false;
    } else if (iduser==="paper"){
        userwin=compchoices==="rock"?true:false;
    } else if(iduser==="scissor"){
        userwin=compchoices==="paper"?true:false;
    }else{
        console.log("unknown user choice:",iduser);
        return;
        
    }
    showWinner(userwin,iduser,compchoices);
   }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const iduser=choice.getAttribute("id")
        playGame(iduser);

    });

});
