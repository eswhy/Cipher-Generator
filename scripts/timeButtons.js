/////////////TIMER/////////////
function countdown(time) {
    if (!hasStarted) {
        switchWord();
        hasStarted = true;
    }
    setTimeout(() => {
        if (!isPlaying) {
            return;
        }
        if (timeLeft / 1000 < 0) {
            timeLeft = currentTimeSelection;
            switchWord();
        }
        $("#time").text(timeLeft / 1000);
        timeLeft -= 1000;
        countdown(timeLeft);
    }, 1000);
}



/////TIME BUTTON EVENTS - CHANGE TIMELEFT BETWEEN WORD CHANGE//////
$(document).ready(function () {
    $("#fifteen").on("click", () => {
        value = parseInt($("#fifteen").val(), 10);
        $("#time").text(value / 1000);
        currentTimeSelection = parseInt(value, 10);
        timeLeft = parseInt(value, 10);
    });

    $("#twenty").on("click", () => {
        value = parseInt($("#twenty").val(), 10);
        $("#time").text(value / 1000);
        currentTimeSelection = parseInt(value, 10);
        timeLeft = parseInt(value, 10);
    });

    $("#twenty-five").on("click", () => {
        value = parseInt($("#twenty-five").val(), 10);
        $("#time").text(value / 1000);
        currentTimeSelection = parseInt(value, 10);
        timeLeft = parseInt(value, 10);
    });

    $("#thirty").on("click", () => {
        value = parseInt($("#thirty").val(), 10);
        $("#time").text(value / 1000);
        currentTimeSelection = parseInt(value, 10);
        timeLeft = parseInt(value, 10);
    });
});

// $("topicsBox li").on("click", ()=>{
//   console.log("hi");
// }