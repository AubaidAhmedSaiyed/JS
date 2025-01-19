let btn = document.querySelector("button");
let  inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){

    if(inp.value != ""){ // if input value is not inputted and user clicks button so error handled!

        let item = document.createElement("li");
        let debtn = document.createElement("button");//create elemnt
// first li name then delete button
        item.innerText = inp.value; 
        debtn.innerText = "delete";
        
        debtn.style.marginLeft = "3px" // for space betweeen button and text
        debtn.classList.add("delete");

        item.appendChild(debtn);
        ul.appendChild(item); // li inside ul

        

    }

    inp.value = ""; // for replacing input value with empty string as when we tap on button , input box will be blank as new

    
})