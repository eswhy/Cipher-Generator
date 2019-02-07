let $topicBtn = $("#topicBtn");
let $topic = $("#topics-box");
let $basic = $("#basicOption");
let $actorsActress = $("#actorsActressOption");


$topicBtn.on("click", () => {
    $topic.toggle("slow");
});
$basic.on("click", () => {
    wordList = basicList;
});
$actorsActress.on("click", () => {
    wordList = actList;
});
