// Keyboard

let inp = document.querySelector("input");

inp.addEventListener("keypress", function(event){
    // console.log(event);// we get obejct for that - in which we have key named - that key value(like if j key is pressed then key = 'j')
    // console.log("Key Pressed!");
    // console.log(event.key);
    // console.log(event.code);

    // example use
    if(event.code == "KeyA"){
        console.log("fsdf");
    }

   
})


// usefull in gaming or somthing like invlove key use like for up down keys oe anything


// form
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("Submitted");


    //extract data

    //m1
    let inp2 = document.querySelector("input");
    console.log(inp2);
    console.dir(inp2);
    console.log(inp2.innerText);
    // for input user data dont store in innerText
    // it is stored in value property
    console.log(inp2.value);

    //drawback - multiple times id/class given to html elemnts


    //m2
    console.dir(form);
    // in form there exist a key that is elemtnt - collection of inputs and buttons
    console.log(form.elements);
    console.log(form.elements[1]); // password tag 
    console.log(form.elements[1].value);

})

// LIKE A SEARCH BAR !!!

// change/input event

let text =document.querySelector("#text");
let p = document.querySelector("p");

text.addEventListener("input",function(){
    // input is used because each word is to be printed on screen
    // for making text editor which displays text that we write on input box
    console.log(text.value);
    // input box value qual to para innerText which will be display 
    p.innerText = text.value;


})

// event delegation

