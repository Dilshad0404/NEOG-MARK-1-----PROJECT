var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question(" enter your Name here ");



console.log(" welcome " + userName + " DO YOU KNOW DILSHAD? ");

function play(question , answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer === answer){
    console.log("right")
    score = score + 1
  }else{
    console.log("wrong")
  }
  score = score+0
  console.log(" current score : " + score);
  console.log("...........")
}

var questions = [{
  question: "where do I belong to? ",
  answer: "sasaram"
},{
  question: "my favorite superhero is? ",
  answer: "batman" 
},
{
  question: "which color do I like the most? ",
  answer: "black"
}];
 

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
if(score > 1){
  console.log("wohoo you scored: " + score)
}else{
  console.log("oops your score is: "+score)
}