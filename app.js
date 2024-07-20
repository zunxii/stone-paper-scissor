let computer1 = ["rock1", "paper1", "scissor1"]
let computer = ["rock", "paper", "scissor"]


let rock1 = document.querySelector(".rock1")
let paper1 = document.querySelector(".paper1")
let scissor1 = document.querySelector(".scissor1")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let start = document.querySelector(".start")
let retry = document.querySelector(".retry")
let home = document.querySelector(".home")
let line1 = document.querySelector(".line1")
let line3 = document.querySelector(".line3")
let wait = document.querySelector(".wait")
let logo = document.querySelector(".logo")
let title = document.querySelector(".title")
let mini = document.querySelector(".mini")
let hand = document.querySelector(".hand")
let userMove;


function play(){
    start.classList.add("hidden")
    line1.classList.add("hidden")
    rock.classList.remove("hidden")
    scissor.classList.remove("hidden")
    paper.classList.remove("hidden")
    line3.classList.remove("hidden")
    logo.classList.add("hidden")
    title.classList.add("hidden")
    mini.classList.remove("hidden")
}
start.addEventListener("click", play)

rock.addEventListener("click", () => {
    scissor.classList.add("hidden")
    paper.classList.add("hidden")  
    playScreen()
    rock.classList.remove("hover")
    userMove = "rock"

}
)
paper.addEventListener("click", () => {
    scissor.classList.add("hidden")
    rock.classList.add("hidden")
    paper.classList.remove("hover")
    playScreen()
    userMove = "paper"

}
)
scissor.addEventListener("click", () => {
    rock.classList.add("hidden")
    paper.classList.add("hidden")
    scissor.classList.remove("hover")
    playScreen()
    userMove = "scissor"

}
)

function playScreen() {
    mini.classList.add("hidden");
    line3.classList.add("hidden");
    wait.classList.remove("hidden");
    
    setTimeout(() => {
      wait.innerHTML = "Computer is choosing...";
    }, 1000);
    setTimeout(() => {
        wait.classList.add("hidden");
        let randIdx = Math.floor(Math.random()*3);
        let compt1 = computer1[randIdx];
        console.log(compt1)
        let compt = computer[randIdx];
        let computerMove = document.querySelector(`.${compt1}`);
        computerMove.classList.remove("hidden");
        result(userMove,compt); //userMove and compt are strings
        retry.classList.remove("hidden")
        home.classList.remove("hidden")
    }, 2500);
    
  }
  
  function result(user,comp){
    if(user===comp){
        wait.classList.remove("hidden")
        wait.innerHTML = "Draw"
    }
    else if(user === "rock" && comp === "scissor" || user === "paper" && comp ==="rock" || user ==="scissor" && comp ==="paper"){
        wait.classList.remove("hidden")
        wait.innerHTML = "You win!!"
     }
     else{
        wait.classList.remove("hidden")
        wait.innerHTML = "You Lose!!"
     }
  }

function reset(){
    start.classList.remove("hidden")
    line1.classList.remove("hidden")
    rock.classList.add("hidden")
    scissor.classList.add("hidden")
    paper.classList.add("hidden")
    rock1.classList.add("hidden")
    scissor1.classList.add("hidden")
    paper1.classList.add("hidden")
    line3.classList.add("hidden")
    logo.classList.remove("hidden")
    title.classList.remove("hidden")
    retry.classList.add("hidden")
    home.classList.add("hidden")
    wait.classList.add("hidden")
    wait.innerHTML = "Wait..."
    rock.classList.add("hover")
    paper.classList.add("hover")
    scissor.classList.add("hover")
    mini.classList.add("hidden")
}

home.addEventListener("click", reset)

const backgroundMusic = document.getElementById("backgroundMusic");

// Play the audio when the page loads
window.addEventListener("load", () => {
    backgroundMusic.play().catch(error => {
        console.error("Background music could not be played automatically:", error);
    });
});
