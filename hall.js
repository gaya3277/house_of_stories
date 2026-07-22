// ==========================
// BOOKSHELF
// ==========================

const bookshelf = document.getElementById("bookshelf");
const overlay = document.getElementById("overlay");

const paperNote = document.getElementById("paperNote");
const booksMenu = document.getElementById("booksMenu");
const closeButton = document.getElementById("closeNote");

function hideAllPopups(){

    paperNote.classList.add("hidden");
    booksMenu.classList.add("hidden");
    letterNote.classList.add("hidden");
    radioNote.classList.add("hidden");

}

bookshelf.addEventListener("click", function(){

    overlay.classList.remove("hidden");

    hideAllPopups();

    paperNote.classList.remove("hidden");

});


closeButton.addEventListener("click", function () {

    paperNote.classList.add("hidden");
    booksMenu.classList.remove("hidden");

});


// ==========================
// LETTERS
// ==========================

const letterNote = document.getElementById("letterNote");
const letterTitle = document.getElementById("letterTitle");
const letterContent = document.getElementById("letterContent");
const closeLetter = document.getElementById("closeLetter");

const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");

const letterOneText = `
Today is about celebrating you.

I hope this little house
brings you smiles.

❤️
`;

const letterTwoText = `
Thank you
for walking through
this little house.

May your future be
full of beautiful stories.
`;

letter1.addEventListener("click", function () {

    booksMenu.classList.add("hidden");
    letterNote.classList.remove("hidden");

    letterTitle.textContent = "Hi!";
    letterContent.textContent = letterOneText;

});

letter2.addEventListener("click", function () {

    booksMenu.classList.add("hidden");
    letterNote.classList.remove("hidden");

    letterTitle.textContent = "";
    letterContent.textContent = letterTwoText;

});

closeLetter.addEventListener("click", function () {

    letterNote.classList.add("hidden");
    booksMenu.classList.remove("hidden");

});


// ==========================
// RADIO
// ==========================

const radio = document.querySelector(".radio");
const radioNote = document.getElementById("radioNote");
const playMusic = document.getElementById("playMusic");
const happyMusic = document.getElementById("happyMusic");

let musicStarted = false;

radio.addEventListener("click", function(){

    if(!musicStarted){

        overlay.classList.remove("hidden");

        hideAllPopups();

        radioNote.classList.remove("hidden");

    }
    else {

        if (happyMusic.paused) {

            happyMusic.play();

        }
        else {

            happyMusic.pause();

        }

    }
});


playMusic.addEventListener("click", function () {

    radioNote.classList.add("hidden");
    overlay.classList.add("hidden");

    happyMusic.play();

    musicStarted = true;

});


// ==========================
// CLICK OUTSIDE TO CLOSE
// ==========================

overlay.addEventListener("click", function (event) {

    if (event.target === overlay) {

        paperNote.classList.add("hidden");
        booksMenu.classList.add("hidden");
        letterNote.classList.add("hidden");
        radioNote.classList.add("hidden");
        overlay.classList.add("hidden");

    }

});


// ==========================
// DON'T CLOSE WHEN CLICKING INSIDE
// ==========================

paperNote.addEventListener("click", function (event) {

    event.stopPropagation();

});

booksMenu.addEventListener("click", function (event) {

    event.stopPropagation();

});

letterNote.addEventListener("click", function (event) {

    event.stopPropagation();

});

radioNote.addEventListener("click", function (event) {

    event.stopPropagation();

});

// ==========================
// CAKE
// ==========================

const cake = document.getElementById("cake");
cake.addEventListener("click", function(){

    cake.src = "../assets/objects/cake.png";

});



const dramaRoom = document.getElementById("dramaRoom");
const starsRoom = document.getElementById("starsRoom");
const roofRoom = document.getElementById("roofRoom");

dramaRoom.addEventListener("click", function(){

    window.location.href = "drama.html";

});

starsRoom.addEventListener("click", function(){

    window.location.href = "stars.html";

});

roofRoom.addEventListener("click", function(){

    window.location.href = "rooftop.html";

});

// const roofRoom =
// document.getElementById("roofRoom");

// roofRoom.addEventListener("click",function(){

//     window.location.href =
//     "../pages/rooftop.html";

// });