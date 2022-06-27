let menu = document.getElementById("menuBurger");
// console.log(menu);

let menuPop = document.getElementById("linkPagesMedia");
// console.log(menuPop);

let cross = document.getElementById("menuCross");
// console.log(cross);

menu.addEventListener("click",function(){
    menuPop.style.display = "block";

    menu.style.display = "none";

    cross.style.display = "block";
})

cross.addEventListener("click", function(){
    menuPop.style.display = "none";

    menu.style.display = "flex";

    cross.style.display = "none";
})

r