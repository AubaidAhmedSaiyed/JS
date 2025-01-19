let gameSeq = []; // seq that track flashes whehther box 1 ,2...
let userSeq = []; // user that click on flashes box

// btn press then check if user same as gameSeq
// now - btn flashes will be random 
let color= ["blue","purple","pink","green"];
// if both seq same then level++ or if not game over
let started = false;

let level = 0;

function start(){


    document.addEventListener("keypress",function(){

    
    

        if(started == false){
            console.log("Game started");
            started = true;
            //started = true;
            
            // let line1= document.querySelector(".line1");
            // let line2= document.querySelector(".line2");

            // for  changing h3 to level..
            level++;
            let h3 = document.querySelector("h3");
            h3.innerText = `Level ${level}`;
            chooseColor();
            
        

            
            
        
        } // so that not every time game start and only one time
        

    })
}

start();

function levelUp(){
    userSeq = [];
    level++;
    let h3 = document.querySelector("h3");
    h3.innerText = `Level ${level}`;
    chooseColor();
}
function systemFlash(btn){

    // system's flashes
    btn.classList.add("flash"); // add a class
    setTimeout(function (){ // timeout for blinking of color 
        btn.classList.remove("flash");
    },350)


}

function chooseColor(){


    let randomIdx = Math.floor(Math.random()*4); // 0 to 3
    let randomColor = color[randomIdx];
    let randomButton = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomButton.getAttribute("text"));
    console.log(gameSeq);
    systemFlash(randomButton);

    // OR

    // another method for small number of boxes

//     let value = line1.children[0].getAttribute("text");
//     let value2 = line2.children[0].getAttribute("text");

//     if(value == random){
//         line1.children[0].classList.add("flash");
//         setTimeout(function(){
//             line1.children[0].classList.remove("flash");
//             } , 250 );
//     }else if((++value) == random){
//         line1.children[1].classList.add("flash");
//         setTimeout(function(){
//             line1.children[1].classList.remove("flash");
//             } , 250 );
        
//     }
//     else if(random == 3){
//         line2.children[0].classList.add("flash");
//         setTimeout(function(){
//             line2.children[0].classList.remove("flash");
//             } , 250 );
//     }
//     else if(random == 4){
//         line2.children[1].classList.add("flash");
//         setTimeout(function(){
//             line2.children[1].classList.remove("flash");
//             } , 250 );
        
//     }
// }
}


function userFlash(btn){

    btn.classList.add("userflash"); // add a class
    setTimeout(function (){ // timeout for blinking of color 
        btn.classList.remove("userflash");
    },250)


}

function btnPress(){

    //user flashes
    let btn = this;
    userFlash(btn); // when user press button - it flashes
    userSeq.push(btn.getAttribute("text"));
    checkSeq(userSeq.length-1);
}

let allBtns =  document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}



function checkSeq(idx){

    //checking last element of array to check sequence of both arrays
    if(gameSeq[idx] == userSeq[idx]){
        console.log(gameSeq);
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            
        }

    }else{
        let h3 = document.querySelector("h3");
        h3.innerText = `Game Over! Press any key to start `;
        reset();
    }
}

function reset(){
    started = false;
    gameSeq =[];

    userSeq = [];
    level = 0;
}



