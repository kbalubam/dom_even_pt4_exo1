let h1 = document.querySelectorAll("h1")[0];

let color = () =>{
    h1.setAttribute("style", "color : blue");
};



h1.addEventListener("click",color);