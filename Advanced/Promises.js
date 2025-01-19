// function savetoDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     if(internetSpeed >4){
//         success();
        
//     }
//     else{
//         failure();
    
// }

// callback hell

// savetoDB(
//     "AAS",

//     ()=>{
//         console.log("data saved!");
//         savetoDB("ADS",
//             ()=>{
//                 console.log("data saved2!");
//             },
//             ()=>{
//                 console.log("Weak Connection . Not saved!!");
//         })
//     },

//     ()=>{
//         console.log("Weak Connection . Not saved!!");
//     }
// )

// this works as if pre data saved then only second data will be approaced

//To avoid we use promise object



// resolve == success
// reject = failure\

//PromiseState = pending,rejected,fulfilled/resolved

function savetoDB(data){
   
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10) +1;
        if(internetSpeed >4){
            resolve("success");   
        }
        else{
            reject("weak connection");
        }
    });
    
    
}

// optimize saving data

let request = savetoDB("aas");  //req is promise obj

request
    .then(()=>{
        console.log("promise was resolved")
    })
    .catch(()=>{
        console.log("Promise was rejected")
    })


//now 
let request = savetoDB("aas");  //req is promise obj

request
    .then((result)=>{
        console.log("promise was resolved")
    })
    .catch((error)=>{
        console.log("Promise was rejected")
    })

    // result == resolve
    // error == reject