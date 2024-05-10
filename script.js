let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetbtn");
let message=document.querySelector(".msgContainer");
let msg=document.querySelector(".msg");


let turnO=true;
const winnerPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.backgroundColor = "black";
            box.style.color = "white";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.backgroundColor = "white";
            box.style.color = "black";
            turnO=true;
        }
        box.disabled=true;

        cheakWinner();
    });
});

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="white";
    }
};

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const resetGame=()=>{
    turnO=true;
    enableBox();
    message.classList.add("hide");
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulatios,Winner ${winner}`;
    message.classList.remove("hide");
    disableBox();
};

const cheakWinner=()=>{
    for(let patterns of winnerPatterns){
        let position1=boxes[patterns[0]].innerText;
        let position2=boxes[patterns[1]].innerText;
        let position3=boxes[patterns[2]].innerText;

        if(position1!="" && position2!="" && position3!=""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame);
const cursor = document.querySelector(".cursor");
        var timeout;
        //cursor movement
        document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            cursor.style.top = y + 'px';
            cursor.style.left = x + 'px';
            cursor.style.display = 'block';

            function mouseStopped (){
                cursor.style.display = 'none';
            }

            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 1000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = 'none';
        });
