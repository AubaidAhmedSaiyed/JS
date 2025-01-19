let h1 = document.querySelector("h1");

// setTimeout(() =>{
//     h1.style.color = "red";
// },1000)
// setTimeout(() =>{
//     h1.style.color = "blue";
// },2000)

// setTimeout(() =>{
//     h1.style.color = "green";
// },3000)

//this is tedious when more than this

// so - function!

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        //nextColorChange - callback
        h1.style.color = color;
        if(nextColorChange)nextColorChange();
    },delay)
    
}
//but to show dependency of one to anohter like - later have dependency on before

// callback hell
changeColor("red",1000,()=>{
    changeColor("blue",1000);//simmilarly - other also in nested to this
});


// not this way - because not always it have prescribed time or may have ohter functionality alsoo
// changeColor("blue",2000);
// changeColor("green",3000);


/*

callback is a function that is passed into another function as an argument and is executed after some operation has been completed. In your case, nextColorChange is a callback function.

Here's a breakdown::

When you call changeColor("red", 1000, () => { changeColor("blue", 1000); }), 
the anonymous function () => { changeColor("blue", 1000); } is passed as the nextColorChange parameter.

Inside the changeColor function, setTimeout is used to delay the execution by the specified amount of time (delay).

Once the delay is over, it sets the color of the h1 element and then checks if nextColorChange is defined.

If nextColorChange is defined, it calls nextColorChange(). This triggers the next color change.

No Error Due to Optional Callback:
In JavaScript, you don't need to pass a callback function (nextColorChange) every time you call changeColor. If you don't provide the third argument, nextColorChange will be undefined, and the if(nextColorChange)nextColorChange(); check ensures that it only tries to call nextColorChange if it's actually defined. This is why there’s no error if nextColorChange is not provided

*/

final
/// optimize

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //nextColorChange - callback
            h1.style.color = color;
            if(nextColorChange)nextColorChange();
        },delay)
    });
    
}

let requestPromise = changeColor("red",5000); // here pending - not complete till delay

// then fulfilled after complted
// for numbr of colors
requestPromise
    .then(()=>{
        console.log("red color complted");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("org color complted");
        return changeColor("orange",1000);
    })
    .then(()=>{
        console.log("g color complted");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("blue color complted");
        return changeColor("blue",1000);
    })