// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.


/*-------------------------------- Constants --------------------------------*/
const state= {
    bordem: 0,
    hunger:0,
    sleepiness:0
}


/*---------------------------- Variables (state) ----------------------------*/
let timer
let gameOver



/*------------------------ Cached Element References ------------------------*/
const boredomStatEl= document.getElementById("boredom-stat")
console.log(boredomStatEl)
const hungerStatEl= document.getElementById("hunger-stat")
console.log(hungerStatEl)
const sleepinessStatEl= document.getElementById("sleepiness-stat")
console.log(sleepinessStatEl)
const playBtnEl= document.getElementById("play")
console.log(playBtnEl)
const feedBtnEl= document.getElementById("feed")
console.log(feedBtnEl)
const sleepBtnEl= document.getElementById("sleep")
console.log(sleepBtnEl)
const gameMessageEl= document.getElementById("message")
console.log(gameMessageEl)
const resetBtnEl= document.getElementById("restart")
console.log(resetBtnEl)



/*-------------------------------- Functions --------------------------------*/
//function 1
function init(){
    console.log("game been initialize")
    gameMessageEl.classList.add("hidden")
    resetBtnEl.classList.add("hidden")
    state.bordem= 0
    state.hunger= 0
    state.sleepiness= 0
    gameOver= false
    timer= setInterval(runGame, 2000)
    render()
}
//function 2
function runGame(){
    updateStates()
    checkGameOver()
    render()
}
//function 3
function render(){
    if(gameOver){
        clearInterval(timer)
        gameMessageEl.classList.remove("hidden")
        resetBtnEl.classList.remove("hidden")
    }
    boredomStatEl.textContent= state.bordem
    sleepinessStatEl.textContent= state.sleepiness
    hungerStatEl.textContent= state.hunger
}
//functoin 4
function updateStates(){
    state.bordem+= Math.floor(Math.random()*4)
    state.sleepiness+= Math.floor(Math.random()*4)
    state.hunger+= Math.floor(Math.random()*4)

}
//function 5
function checkGameOver(){
    if(state.bordem>9 || state.sleepiness>9 || state.hunger>9)
        gameOver= true
}
//function 6
function playBtnClick(){
    state.bordem= 0
    render()
}
//function 7
function feedBtnClick(){
    state.hunger= 0
    render()
}
//function 8
function sleepBtnClick(){
    state.sleepiness= 0
    render()
}
//function 6
function resetBtnClick(){
    init()
}



/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener("click", playBtnClick)
feedBtnEl.addEventListener("click", feedBtnClick)
sleepBtnEl.addEventListener("click", sleepBtnClick)
resetBtnEl.addEventListener("click", resetBtnClick)


init()