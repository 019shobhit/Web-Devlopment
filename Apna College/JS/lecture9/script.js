let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let body = document.querySelector("body");
let turn0 = true;

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText= "";
        msgContainer.classList.add("hide");
    }
}

const resetGame = ()=>{
    turn0 = false;
    enablebtn();
}

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = ((winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);