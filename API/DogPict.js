let btn = document.querySelector("button");

btn.addEventListener("click",async function(){
    let img = document.querySelector("#result");
   //console.dir(img); // here from api - we are getting message url(img url)
   let link =  await getFacts();
   img.setAttribute("src",link);
});
//remember as below is async function - it returns promise , so we used await so that inner function will not print till it gets data
async function getFacts() {
    try{
        let response = await axios.get("https://dog.ceo/api/breeds/image/random"); // await is used as fetch return promise and js is async or see video
       // console.log(response);//obj
        return response.data.message;//exact data
    }
    catch(err){
        console.log("Error");
    }
};

