function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max + 1) ) + min;
}

var num;
var max;
var min;
max=0


function Easy() {
  max=9999,min=1000
  location.href('game.html');
}

function inter() {
  max=999999
  min=100000
}

function hard() {
  max=99999999
  min=10000000
}


function DisplayNum() {
  num=getRndInteger(min,max)
  if (max==0) {
    document.getElementById('num').innerHTML="Select any level before starting the game"

  }
  else {


      document.getElementById('num').innerHTML= num
      document.getElementById('result').innerHTML=""
      document.getElementById('answer').focus()
      setTimeout(function(){ document.getElementById('num').innerHTML="Write the number you just saw!!" }, 3000);

  }


}

function CheckAnswer() {
  answer=document.getElementById('answer').value
  if(answer==num){
    document.getElementById('result').innerHTML="Hurray!! You won"

  }
  else if (answer=="") {
    document.getElementById('result').innerHTML="You cannot left field empty, Try again wth a number"

  }
  else {
    document.getElementById('result').innerHTML="Ooops!! you lost"

  }
  document.getElementById('result').scrollIntoView()

}
