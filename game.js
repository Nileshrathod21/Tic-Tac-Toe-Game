let acessinjs = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#Reset");
let winner = document.querySelector("#msg");
let newgame = document.querySelector("#btn");
let container = document.querySelector(".container");
let count = 0;

// console.dir(acessinjs);
// console.dir(acessinjs2);
let turnX = true; //playerX,playerO
const winpaterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
];
const resetgame = () => {
  turnX = true;
  count = 0;
  enebledbtn();
  container.classList.add("hide");
};

acessinjs.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was click")
    if (turnX === true) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    count++;

    let iswinner = checkwinner();

    if (count === acessinjs && !iswinner) {
      drowbox();
    }

    //    checkwinner();
  });
});

const drowbox = () => {
  msg.innerText = `The game was Drow `;
  container.classList.remove("hide");
  disabledbtn();
};

let disabledbtn = () => {
  for (let box of acessinjs) {
    box.disabled = true;
  }
};
let enebledbtn = () => {
  for (let box of acessinjs) {
    box.disabled = false;
    box.innerText = "";
  }
};

let showwinner = (winner) => {
  msg.innerText = `congratulation excellent performmance  ${winner}`;
  container.classList.remove("hide");
  disabledbtn();
};

const checkwinner = () => {
  for (let winner of winpaterns) {
    // console.log(winner[0],winner[1],winner[2]);
    // console.log(acessinjs[winner[0]].innerText,acessinjs[winner[1]].innerText,acessinjs[winner[2]].innerText);
    let posval1 = acessinjs[winner[0]].innerText;
    let posval2 = acessinjs[winner[1]].innerText;
    let posval3 = acessinjs[winner[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner", posval1);

        showwinner(posval1);
        checkwinner();
      }
    }
  }
};

newgame.addEventListener("click", resetgame);
Resetbtn.addEventListener("click", resetgame);
resetgame();
