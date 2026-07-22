const girl = document.getElementById("girl");
const cat = document.getElementById("cat_sleep");
const enterButton = document.getElementById("enterButton");
const outsideScene = document.getElementById("outsideScene");

enterButton.addEventListener("click", function(){

    girl.style.left = "40%";

    cat.style.left = "50%";

    enterButton.style.transform = "translateX(-50%) scale(0.65)";
    enterButton.style.opacity = "0";
    enterButton.style.pointerEvents = "none";

    // Wait until the walk finishes
    setTimeout(function(){

        outsideScene.style.opacity = "0";

        // Wait until the fade finishes
        setTimeout(function(){

            window.location.href = "pages/hall.html";

        },1500);

    },2000);

});


let bookshelfUnlocked = false;
