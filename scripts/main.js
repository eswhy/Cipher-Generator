let wordList = basicList;
let sCloudPlayer = SC.Widget(sCloud);
///////VARIABLES DESCRIBING CURRENT STATE////////
let timeLeft = 30000;
let currentTimeSelection = 30000;
let hasStarted = false;
let isPlaying = false;

/////////START,PAUSE & NEXT WORD//////////////
let playPause = document.querySelector("#playPause");

playPause.addEventListener("click", () => {
    if (isPlaying === false) {
        isPlaying = true;
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
        sCloudPlayer.play();
        countdown(currentTimeSelection);
    } else {
        isPlaying = false;
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-play");
        sCloudPlayer.pause();
    }
});

$("#nextBtn").on("click", () => {
    $("#word").text(newWord()); ///could be refactored but recursively calling switchword so cannot call that function
});

//GENERATES A NEW WORD
function newWord() {
    let indx = Math.floor(Math.random() * wordList.length - 1);
    return wordList[indx].toUpperCase();
}

//////SWITCHES THE WORD THE USER SEES
function switchWord() {
    $("#word").text(newWord());
    hasStarted = true;
}