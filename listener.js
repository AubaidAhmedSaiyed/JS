
let btn = document.querySelector(".btn1");


btn.onclick = function ()  {
     alert("liked");
};


function heello(){
    alert("Hello");
}



btn.addEventListener("click",heello);
// for btn 4 - to add box

let btn2 = document.querySelector(".btn4");

btn2.addEventListener("click",function(){
    
    let box = document.querySelector(".box");

    box.style.height = "100px";
    box.style.width = "100px";
    box.style.border = "1px solid rgb(70, 184, 186)";
    box.style.backgroundColor = 'rgb(70, 184, 186)';

});

