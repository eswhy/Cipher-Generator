
////TOPICS CONTROL/////
let $topicBtn = $("#topicBtn");
let $topicsList = $("#topics-box");
let $basic = $("#basicOption");
let $actorsActress = $("#actorsActressOption");
let $animals = $("#animalsOption")

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
})


///BEAT CONTROL////
let $beatButton = $("#beatControlBtn");
let $musicControl = $("#musicBox")
$beatButton.on("click", () => {
    $musicControl.toggle("explode");
});


/////BACKGROUND CONTROL////
let $backgroundButton = $("#backgroundBtn");
$backgroundButton.on("click", () => {
    let backgroundIndx = Math.floor(Math.random() * backgroundImages.length);
    let changeBackground = function () {
        $("body").css("background-image", 'url(' + backgroundImages[backgroundIndx] + ')');
    }
    changeBackground();

})
