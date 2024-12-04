const buttons = document.querySelectorAll(".box_f1,.box_f2,.box_f3,.box_s1,.box_s2,.box_s3,.box_t1,.box_t2,.box_t3");
let i=0;
let gameactive = true;
buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if(!gameactive) return;
            if (button.innerText === ""){
                if(i === 0){
                    button.innerText = "X";
                    i = 1;
                }
                else{
                    button.innerText = "O";
                    i = 0;
                }   
                checkWin();   
            }
    });
});
function checkWin() {
    const wincombinations = [
        [".box_f1",".box_f2",".box_f3"],
        [".box_s1",".box_s2",".box_s3"],
        [".box_t1",".box_t2",".box_t3"],
        [".box_f1",".box_s1",".box_t1"],
        [".box_f2",".box_s2",".box_t2"],
        [".box_f3",".box_s3",".box_t3"],
        [".box_f1",".box_s2",".box_t3"],
        [".box_f3",".box_s2",".box_t1"]
    ]
    let gamewin = false;
    const winMessage = document.querySelector(".winMessage");
    wincombinations.forEach((combination) => {
        const [box1selector , box2selector ,box3selector] = combination;

        const box1 = document.querySelector(box1selector).innerText;
        const box2 = document.querySelector(box2selector).innerText;
        const box3 = document.querySelector(box3selector).innerText;
                if(box1 !== "" && box1 == box2 && box2 == box3){
                    const winMessage = document.querySelector(".winMessage");
                    winMessage.innerText = `Congrats :- ${box1} wins!`;
                    gamewin = true;
                    gameactive = false;
                }
    })
    if(!gamewin){
        const allBoxes = document.querySelectorAll(".box_f1,.box_f2,.box_f3,.box_s1,.box_s2,.box_s3,.box_t1,.box_t2,.box_t3");
        const allFilled = Array.from(allBoxes).every((box) => box.innerText !== "");
        if (allFilled) {
            winMessage.innerText = "Oops, it's a draw!";
            gameactive = false;
        }
        
    }
}

function refresh() {
    const buttons = document.querySelectorAll(".box_f1,.box_f2,.box_f3,.box_s1,.box_s2,.box_s3,.box_t1,.box_t2,.box_t3");
    buttons.forEach((button) => {
            button.innerText = "";
        });
        const winMessage = document.querySelector(".winMessage");
        if(winMessage){
            winMessage.innerText = "";
        };
        i = 0;
        gameactive = true;
}
document.querySelector(".button1").addEventListener("click",refresh);

