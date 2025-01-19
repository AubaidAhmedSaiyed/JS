let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
// 
//         let response = await fetch(url); // await is used as fetch return promise and js is async or see video
//         let data1 = await response.json();
//         console.log(data1);
//         console.log(data1.fact);



//         let response1 = await fetch(url); // await is used as fetch return promise and js is async or see video
//         let data2 = await response1.json()



///;
//         console.log(data2);// data js object
//         console.log(data2.fact);  // exact data 
//     }
//     catch(err){
//         console.log("Error");
//     }
//     console.log("Bye!");
//}
//axios = library to make http requests
async function getFacts() {
    try{
        let response = await axios.get(url); // await is used as fetch return promise and js is async or see video
        console.log(response);//obj
        console.log(response.data.fact);//exact data
        //console.log(data1.fact);

        // let response1 = await fetch(url); // await is used as fetch return promise and js is async or see video
        // let data2 = await response1.json();
        // console.log(data2);// data js object
        // console.log(data2.fact);  // exact data 
    }
    catch(err){
        console.log("Error");
    }
    console.log("Bye!");
}
getFacts();

// here data.something - that something can be found in obj of that API 
//how? - when print response - we get promise - check data and then inside it