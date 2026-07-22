const overlay = document.getElementById("overlay");

const dramaCard = document.getElementById("dramaCard");
const correctCard = document.getElementById("correctCard");

const cupboard1 = document.getElementById("cupboard1");
const cupboard2 = document.getElementById("cupboard2");
const cupboard3 = document.getElementById("cupboard3");
const cupboard4 = document.getElementById("cupboard4");

const dramaPhoto = document.querySelector(".drama-photo");

const answerBox = document.getElementById("answer");
const submitButton = document.getElementById("submitAnswer");

const correctText = document.querySelector("#correctCard p");

const music = document.getElementById("happyMusic");

const closeMusic = document.getElementById("closeMusic");

let currentDrama = 1;

// Keeps track of solved dramas
let completedDramas = [];



// ------------------------
// CUPBOARD 1
// ------------------------

cupboard1.addEventListener("click", function(){

    currentDrama = 1;

    dramaPhoto.src = "../assets/photos/happinessphoto.png";

    overlay.classList.remove("hidden");

});



// ------------------------
// CUPBOARD 2
// ------------------------

cupboard2.addEventListener("click", function(){

    currentDrama = 2;

    dramaPhoto.src = "../assets/photos/immarriedbut.png";

    overlay.classList.remove("hidden");

});



// ------------------------
// CUPBOARD 3
// ------------------------

cupboard3.addEventListener("click", function(){

    currentDrama = 3;

    dramaPhoto.src = "../assets/photos/flowerofevil.png";

    overlay.classList.remove("hidden");

});



// ------------------------
// CUPBOARD 4
// ------------------------

cupboard4.addEventListener("click", function(){

    currentDrama = 4;

    dramaPhoto.src = "../assets/photos/reply1988.png";

    overlay.classList.remove("hidden");

});



// ------------------------
// SUBMIT
// ------------------------

submitButton.addEventListener("click", function(){

    let answer = answerBox.value.trim().toLowerCase();

    let correct = false;



    // ------------------------
    // CHECK ANSWERS
    // ------------------------

    if(currentDrama === 1){

        correct = answer === "happiness";

    }

    else if(currentDrama === 2){

        correct =
            answer === "im married but" ||
            answer === "i'm married but" ||
            answer === "married but";

    }

    else if(currentDrama === 3){

        correct =
            answer === "flower of evil" ||
            answer === "flowerofevil";

    }

    else if(currentDrama === 4){

        correct =
            answer === "reply 1988" ||
            answer === "reply1988";

    }



    if(correct){

        dramaCard.classList.add("hidden");

        correctCard.classList.remove("hidden");

        // Save completed drama
        if(!completedDramas.includes(currentDrama)){
            completedDramas.push(currentDrama);
        }



        // ------------------------
        // MESSAGE
        // ------------------------

        if(currentDrama === 1){

            correctText.innerHTML = `
            Here's <b>Happiness</b> for you.
            <br><br>
            I hope it makes your day a little brighter.
            `;

            music.src = "../assets/music/happiness.mpeg";

        }

        else if(currentDrama === 2){

            correctText.innerHTML = `
            Here's <b>I'm Married... But!</b> for you.
            <br><br>
            Hope you enjoy every hilarious moment.
            `;

            music.src = "../assets/music/immarriedbut.mpeg";

        }

        else if(currentDrama === 3){

            correctText.innerHTML = `
            Here's <b>Flower of Evil</b> for you.
            <br><br>
            Enjoy one of the best thrillers ever made.
            `;

            music.src = "../assets/music/flowerofevil.mpeg";

        }

        else if(currentDrama === 4){

            correctText.innerHTML = `
            Here's <b>Reply 1988</b> for you.
            <br><br>
            A warm hug in the form of a drama.
            `;

            music.src = "../assets/music/reply1988.mpeg";

        }

        music.play();

    }

    else{

        alert("Try Again!");

    }

});



// ------------------------
// CLOSE
// ------------------------

closeMusic.addEventListener("click", function(){

    music.pause();

    music.currentTime = 0;

    overlay.classList.add("hidden");

    correctCard.classList.add("hidden");

    dramaCard.classList.remove("hidden");

    answerBox.value = "";

    // If all four dramas have been completed,
    // return to the Hall.
    if(completedDramas.length === 4){

        window.location.href = "../pages/hall.html";

    }

});