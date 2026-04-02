const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (e) => {
    console.log(e.target);
    
    if (e.target.tagName === "BUTTON") {
        e.target.addEventListener("click", (event) => {
            
        })
    }
})