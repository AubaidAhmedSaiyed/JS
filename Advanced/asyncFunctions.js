async function greet(){
    return "hello!";
}

function get(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("5");
            resolve();
    },1000);

    });
}

async function demo(){
    // get();
    // get(); // here both come saath mei
    //so to avoid that and have delay

    await get(); 
    await get();
    console.log("New Number : 110");
}

//try this for color change


// handling rejections

// if promise rejected then remaining statenents will not work

use :
try{
    await...;
}catch{
    ...;
}

