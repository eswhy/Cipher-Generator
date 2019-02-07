let $topicBtn = $("#topicBtn");
let $topic = $("#topics-box");


$topicBtn.on("click", () => {
    $topic.toggle("slow");
})