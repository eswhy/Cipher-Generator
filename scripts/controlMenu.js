
////TOPICS CONTROL/////
let $topicBtn = $("#topicBtn");
let $topicsList = $("#topics-box");
let $basic = $("#basicOption");
let $actorsActress = $("#actorsActressOption");
let $animals = $("#animalsOption");

$topicBtn.on("click", () => {
    $topicsList.toggle("explode");
});
$basic.on("click", () => {
    wordList = basicList;
    switchWord();
});
$actorsActress.on("click", () => {
    wordList = actList;
    switchWord();
});
$animals.on("click", () => {
    wordList = animalList;
    switchWord();
});


///BEAT CONTROL////
let $beatButton = $("#beatControlBtn");
let $musicControl = $("#musicBox");
let $playPauseMusic = $("#playMusic");
let $nextBeat = $("#nextBeat");
let $prevBeat = $("#prevBeat");
let isPlaying = false;

$beatButton.on("click", () => {
    $musicControl.toggle("explode");
});
$playPauseMusic.click(() => {
    if (isPlaying === false) {
        isPlaying = true;
        $playPauseMusic.removeClass("fa-play");
        $playPauseMusic.addClass("fa-pause");
        playPause.classList.remove("fa-microphone-alt");
        playPause.classList.add("fa-pause");
        sCloudPlayer.play();
    } else {
        isPlaying = false;
        $playPauseMusic.removeClass("fa-pause");
        $playPauseMusic.addClass("fa-play")
        playPause.classList.remove("fa-pause");
        playPause.classList.add("fa-microphone-alt");
        sCloudPlayer.pause();
    }
});
$nextBeat.click(() => {
    sCloudPlayer.next();
})
$prevBeat.click(() => {
    sCloudPlayer.prev();
})


/////BACKGROUND CONTROL////
let $backgroundButton = $("#backgroundBtn");
$backgroundButton.on("click", () => {
    let backgroundIndx = Math.floor(Math.random() * backgroundImages.length);
    let changeBackground = function () {
        $("body").css("background-image", 'url(' + backgroundImages[backgroundIndx] + ')');
    }
    changeBackground();
})


/////C
