
const cat = document.getElementById("cat");

const girl = document.getElementById("girl");
const glow = document.getElementById("glow");

const birthdayNote =
document.getElementById("birthdayNote");

const restartButton =
document.getElementById("restartButton");

cat.addEventListener("click",function(){

    cat.classList.add("fade");

    setTimeout(function(){

        cat.classList.add("hidden");

        girl.classList.remove("hidden");

    },1000);

    setTimeout(function(){

        birthdayNote.classList.remove("hidden");

    },2200);

    setTimeout(function(){

        restartButton.classList.remove("hidden");

    },7200);

});
restartButton.addEventListener("click",function(){

    window.location.href="../index.html";

});
