let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  let num = Math.floor(Math.random()*10)
  return num;
}
// console.log(generateTarget());
function compareGuesses(human,cpu,secret){
var user  = Math.abs(human - secret);
var com = Math.abs(cpu - secret);

if (user < com){
  console.log(user)
 console.log("The distance the user is from the secret number is "+getAbsoluteDistance(human,secret));
  return true;
}else if(com < user){
  console.log("The distance the computer is from the secre number is "+ getAbsoluteDistance(cpu,secret));
  return false;
}else{
  return "It's a tie!"+" Human wins";
}

}
console.log(compareGuesses(2,1,9));

function updateScore(winner){
if (winner==='human'){
  humanScore++;
}else if(winner==='computer'){
  computerScore++;
}else{
  humanScore++;
}
}
function advanceRound(){
  currentRoundNumber++;
}
function getAbsoluteDistance(num,secret){

if (num < secret){
  num = Math.abs(secret-num)
  return num;
}else if(num >= secret){
  num=Math.abs(num-secret)
  return num;
}
}
console.log(getAbsoluteDistance(2,15))





