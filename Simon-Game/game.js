var buttonColors = ["red","green","blue","yellow"]
var gamePattern = []
var level = 0
var started = false
var userClickedPattern = []

function startover(){
    level = 0
    gamePattern = []
    started = false
}
function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
            console.log("yes")
            if (userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                    nextSequence()
                }, 1000)
            }
            
        }else{
            console.log("no")
            playSound('wrong')
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over")
            },200)
            $("#level-title").text("Game Over, Press Any Key to Restart")
            startover()
        }
    }



function nextSequence(){
    userClickedPattern = [];

    level++
    $("#level-title").text("level "+ level)
    var x = Math.floor(Math.random()*4)
    var randomChosenColor = buttonColors[x]

    gamePattern.push(randomChosenColor)

    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed")
    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed")
    },100)
}

$(".btn").on("click",function(){
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
    playSound(userChosenColor)
})



$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
    
function playSound(name) {
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}






