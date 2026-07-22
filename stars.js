const stars =
document.querySelectorAll(".star");

const counter =
document.getElementById("starCounter");

const finish =
document.getElementById("finishStars");

const constellation =
document.getElementById("constellation");

let score = 0;
stars.forEach(function(star){

    star.addEventListener("click",function(){

        score++;

        counter.textContent = "⭐ " + score;

    });

});
const gameScene =
document.getElementById("gameScene");
finish.addEventListener("click", function(){

    gameScene.style.opacity = ".15";

    constellation.classList.remove("hidden");

    setTimeout(function(){

        document.body.style.opacity = "0";

    },4500);

    setTimeout(function(){

        window.location.href = "hall.html";

    },3500);

}); 

