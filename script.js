let winState = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let play = document.querySelector("#play");
let playDraw = document.querySelector("#play-draw");
let draw = document.querySelector(".draw");
let text = document.querySelector(".msg big");
let turn = true;
let gameEnded = false;
let moveCount = 0;

let isWin = ()=>{
    winState.forEach((state)=>{
        console.log(state);
        let val1 = boxes[state[0]].innerText;
        let val2 = boxes[state[1]].innerText;
        let val3 = boxes[state[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3){
            console.log(msg.style.display);
            msg.style.display = "flex";
            text.innerText = (turn) ? '"O" Won!' : '"X" Won!';
            gameEnded = true;
        }
    })
}

play.addEventListener("click", ()=>{
    msg.style.display = "none";
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    turn = true;
    gameEnded = false;
    moveCount = 0;
})

playDraw.addEventListener("click", ()=>{
    draw.style.display = "none";
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    turn = true;
    gameEnded = false;
    moveCount = 0;
})

reset.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    turn = true;
    moveCount = 0;
})

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if (turn)
            box.innerText = "X";
        else
            box.innerText = "O";
        turn = !turn;
        box.disabled = true;
        moveCount++;
        isWin();

        if (!gameEnded && moveCount == 9){
            draw.style.display = "flex";
        }
    })
})