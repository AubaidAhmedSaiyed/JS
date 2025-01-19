let btn = document.querySelector("button");


// for clicking 
btn.addEventListener("click",function(){

    // we get color rgb values intead of heading
    let h3 =document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    // backgroudn color
    let div = document.querySelector(".div2");
    div.style.backgroundColor = randomColor;

    console.log("generate random color");
});

// for random color
function getRandomColor(){
    let red = Math.floor(Math.random() *  255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

