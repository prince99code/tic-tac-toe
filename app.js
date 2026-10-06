let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-game-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 4, 6],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8]
];

boxes.forEach((box) => {


box.addEventListener("click", function () {

    if (turnO) {

        box.innerText = "O";

        turnO = false;

    } else {

        box.innerText = "X";

        turnO = true;
    }

    box.disabled = true;

    checkWinner();

});


});

function checkWinner() {


for (let pattern of winPattern) {

    let pos1 = boxes[pattern[0]].innerText;

    let pos2 = boxes[pattern[1]].innerText;

    let pos3 = boxes[pattern[2]].innerText;


    if (
        pos1 !== "" &&
        pos2 !== "" &&
        pos3 !== ""
    ) {

        if (
            pos1 === pos2 &&
            pos2 === pos3
        ) {

            showWinner(pos1);

        }

    }

}


}

function showWinner(winner) {


msg.innerText = "Winner is " + winner;

msgContainer.classList.remove("hide");

for (let box of boxes) {

    box.disabled = true;

}


}

function resetGame() {


turnO = true;

for (let box of boxes) {

    box.disabled = false;

    box.innerText = "";

}

msgContainer.classList.add("hide");


}

resetBtn.addEventListener("click", resetGame);

newGameBtn.addEventListener("click", resetGame);
