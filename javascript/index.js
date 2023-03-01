//document.querySelector("button").addEventListener("click",function (){alert("I got clicked");});
// function sayHi(){
//     alert("Hi");
// }
// document.querySelectorAll("button")[0].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[1].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[2].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[3].addEventListener("click", function (){alert("I got clicked");});
// document.querySelectorAll("button")[4].addEventListener("click", function (){alert("I got clicked");});
// var audio=new audio('audio1.mp3');
// audio.play();

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // 
      // this.style.color="White";
      makeSound(this.innerHTML);
      addAnimation(this.innerHTML);
     
    });

}
document.addEventListener("keydown",function(event){
      //alert("key is pressed");
      //console.log(event);
      makeSound(event.key);
      addAnimation(event.key);
});

function makeSound(key)
{

  switch(key)
  {
    case 'w': var audio = new Audio("sounds/tom-1.mp3");
                 audio.play();
                 break;
    case 'a': var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
    case 's': var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
    case 'd': var audio=new Audio("sounds/tom-4.mp3");
               audio.play();
               break;  
    case 'j': var audio=new Audio("sounds/kick-bass.mp3");
               audio.play();
               break;         
    case 'k': var audio=new Audio("sounds/crash.mp3");
               audio.play();
               break;         
    case 'l': var audio=new Audio("sounds/snare.mp3");
               audio.play();
               break;                                

  }

}
function addAnimation(currentkey)
{
 var activeButton= document.querySelector("."+currentkey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
  activeButton.classList.remove("pressed");
 },100);

}