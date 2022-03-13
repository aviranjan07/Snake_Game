let direction = {x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');

let speed = 2;
let lastPrintTime = 0;
let snakeArr = [
    {x: 14, y: 15}
]

// game function 
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime - lastPrintTime) / 1000 < 1/speed) {
        return;
    }
    lastPrintTime = ctime;
    gameEngine();
}

function gameEngine() {
    // updating the snake array and food 

    // display the snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
    
}
// main logic starts here
window.requestAnimationFrame(main);