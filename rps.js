let computerscore=parseInt(localStorage.getItem("ComputerScore")) || 0
let playerscore=parseInt(localStorage.getItem("PlayerScore")) || 0



document.getElementById('computerscore').innerHTML = computerscore;
document.getElementById('playerscore').innerHTML = playerscore;

function rulesbutton(){
  
  const rulescontainer=document.getElementById("rulescontainer");
  rulescontainer.style.display="flex"

}
function closeRules(){
  const rulescontainer=document.getElementById("rulescontainer")
  rulescontainer.style.display="none"
}
function rulesbuttoncon(){
  
  const rulescontainercon=document.getElementById("rulescontainercon");
  rulescontainercon.style.display="flex"

}
function closeRulescon(){
  const rulescontainercon=document.getElementById("rulescontainercon")
  rulescontainercon.style.display="none"
}

function next(){
  rockwinning.style.display="none"
  scissorwinningcontainer.style.display="none"
   paperwinning.style.display="none"
  const next=document.getElementById("congratsContainer")
  next.style.display="flex"
  const maincontainer=document.getElementById("maincontainer")
  maincontainer.style.display="none"
}

function playAgain(){
 rpscontainer.style.display="block"
 rulescontainer.style.marginLeft="260px"
 rules.style.marginTop="40px"
 rules.style.marginLeft="1400px"
 scissorwinningcontainer.style.display="none"
 paperwinning.style.display="none"
 rockwinning.style.display="none"
 const rocktie=document.getElementById("RockTie")
const papertie=document.getElementById("PaperTie")
const scissortie=document.getElementById("ScissorTie")
 papertie.style.display="none"
 rocktie.style.display="none"
 scissortie.style.display="none"
 const congratsContainer=document.getElementById("congratsContainer")
 congratsContainer.style.display="none"
 maincontainer.style.display="block"
 const paperloss=document.getElementById("paperLoss")
 paperloss.style.display="none"
 const scissorloss=document.getElementById("scissorLoss")
 scissorloss.style.display="none"
 const rockloss=document.getElementById("rockLoss")
 rockloss.style.display="none"

 
}





function getResult(playerchoice){
  
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerchoice = choices[randomIndex];
  console.log("computerchoice" ,computerchoice);
 console.log("playerchoice:",playerchoice)
  
   const ComputerScore=document.getElementById("computerscore")
   const PlayerScore=document.getElementById("playerscore")
   const scissorwinningcontainer =document.getElementById("scissorwinningcontainer")
   const nextbutton=document.getElementById("nextbutton")
   const rockwinning=document.getElementById("rockwinning")
   const paperwinning=document.getElementById("paperwinning")
   const rocktie=document.getElementById("RockTie")
   const papertie=document.getElementById("PaperTie")
   const scissortie=document.getElementById("ScissorTie")
   const paperloss=document.getElementById("paperLoss")
   const scissorloss=document.getElementById("scissorLoss")
   const rockloss=document.getElementById("rockLoss")
   const rulescontainer=document.getElementById("rulescontainer")
if (playerchoice===computerchoice){
  if (playerchoice==='rock' &&computerchoice==='rock'){ 
    console.log("TIE UP")
   rpscontainer.style.display="none"
    rocktie.style.display="flex"
    document.body.appendChild(rocktie)
    rocktie.style.position="fixed"
    rules.style.marginTop="600px"
    rules.style.marginLeft="1400px"
    nextbutton.style.display="none"
    rulescontainer.style.marginLeft="1200px"
    
  }
  else if(
    (playerchoice==='paper' && computerchoice==='paper')
  ){
    console.log("TIE UP")
    rpscontainer.style.display="none"
    papertie.style.display="flex"
    document.body.appendChild(papertie)
    papertie.style.position="fixed"
    rules.style.marginTop="600px"
    rules.style.marginLeft="1400px"
    nextbutton.style.display="none"
    rulescontainer.style.marginLeft="1200px"

  }
  else if( (playerchoice==='scissor' &&computerchoice==='scissor')){
    
    console.log("TIE UP")
    rpscontainer.style.display="none"
    scissortie.style.display="flex"
    document.body.appendChild(scissortie)
    scissortie.style.position="fixed"
    rules.style.marginTop="600px"
    rules.style.marginLeft="1400px"
    nextbutton.style.display="none"
    rulescontainer.style.marginLeft="1200px"
    
  }
  localStorage.setItem('PlayerScore', playerscore);
  localStorage.setItem('ComputerScore', computerscore);
}



else if ((playerchoice==="rock")&&(computerchoice==="scissor")||
(playerchoice==="paper" && computerchoice==="rock")||
(playerchoice=="scissor" &&computerchoice==="paper")){
  console.log("You win")
  playerscore++;
  localStorage.setItem('PlayerScore', playerscore);
  localStorage.setItem('ComputerScore', computerscore);
  

    if(
     (computerchoice==='paper' &&playerchoice==='scissor')
  ){
   PlayerScore.textContent=playerscore
    rpscontainer.style.display="none"
    scissorwinningcontainer.style.display="flex"
    document.body.appendChild(scissorwinningcontainer)
    scissorwinningcontainer.style.position="fixed"
    rules.style.marginTop="600px"
    rules.style.marginLeft="1200px"
    nextbutton.style.display="flex"
    rulescontainer.style.marginLeft="1200px"
    
  }
 
  else if(
    (computerchoice==='scissor' &&playerchoice==='rock')
 ){
   PlayerScore.textContent=playerscore
   rpscontainer.style.display="none"
   rockwinning.style.display="flex"
   document.body.appendChild(rockwinning)
   rockwinning.style.position="fixed"
   rules.style.marginTop="600px"
   rules.style.marginLeft="1200px"
   nextbutton.style.display="flex"
   rulescontainer.style.marginLeft="1200px"
 }
 else if(
  (computerchoice==='rock' &&playerchoice==='paper')
){
 PlayerScore.textContent=playerscore
 rpscontainer.style.display="none"
 paperwinning.style.display="flex"
 document.body.appendChild(paperwinning)
 paperwinning.style.position="fixed"
 rules.style.marginTop="600px"
 rules.style.marginLeft="1200px"
 nextbutton.style.display="flex"
 rulescontainer.style.marginLeft="1200px"

}


}
else {
  console.log("computerwon")
  computerscore++;
  localStorage.setItem('PlayerScore', playerscore);
  localStorage.setItem('ComputerScore', computerscore);
  if(
    (computerchoice==='scissor' &&playerchoice==='paper')
 ){ 
   
  ComputerScore.textContent=computerscore
   rpscontainer.style.display="none"
  paperloss.style.display="flex"
   document.body.appendChild(paperloss)
   paperloss.style.position="fixed"
   rules.style.marginTop="600px"
   rules.style.marginLeft="1400px"
   nextbutton.style.display="none"
   rulescontainer.style.marginLeft="1200px"
   
 }

 else if(
   (computerchoice==='rock' &&playerchoice==='scissor')
){
   
  ComputerScore.textContent=computerscore
  rpscontainer.style.display="none"
  scissorloss.style.display="flex"
  document.body.appendChild(scissorloss)
  scissorloss.style.position="fixed"
  rules.style.marginTop="600px"
  rules.style.marginLeft="1400px"
  nextbutton.style.display="none"
  rulescontainer.style.marginLeft="1200px"
}
else if(
 (computerchoice==='paper' &&playerchoice==='rock')
){ 
ComputerScore.textContent=computerscore
rpscontainer.style.display="none"
rockloss.style.display="flex"
document.body.appendChild(rockloss)
rockloss.style.position="fixed"
rules.style.marginTop="600px"
rules.style.marginLeft="1200px"
nextbutton.style.display="flex"
rulescontainer.style.marginLeft="1200px"
}

  
}
  

localStorage.setItem('PlayerScore', playerscore);
localStorage.setItem('ComputerScore', computerscore);

}


