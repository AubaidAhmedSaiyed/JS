let btn = document.querySelector("button");

btn.addEventListener("click",async function(){
    let p = document.querySelector("p");
    p.innerText =  await getFacts();
})
//remember as below is async function - it returns promise , so we used await so that inner function will not print till it gets data
async function getFacts() {
    try{
        let response = await axios.get("https://catfact.ninja/fact"); // await is used as fetch return promise and js is async or see video
        console.log(response);//obj
        return response.data.fact;//exact data
        //console.log(data1.fact);

        // let response1 = await fetch(url); // await is used as fetch return promise and js is async or see video
        // let data2 = await response1.json();
        // console.log(data2);// data js object
        // console.log(data2.fact);  // exact data 
    }
    catch(err){
        console.log("Error");
    }
}

