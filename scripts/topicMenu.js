let $topicBtn = $("#topicBtn");
let $topic = $("#topics-box");
let $basic = $("#basicOption");
let $actorsActress = $("#actorsActressOption");
let $animals = $("#animalsOption")


$topicBtn.on("click", () => {
    $topic.toggle("explode");
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
